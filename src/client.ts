import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import OpenAI from 'openai';
import { createInterface, Interface } from 'readline';
// import { ChatCompletionMessageToolCall } from 'openai/resources.mjs';

import { createTransport } from "@smithery/sdk/transport.js"
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';

process.loadEnvFile('./.env')

// Nova flag e função auxiliar para logging verbose
const isVerbose = process.argv.includes("--verbose") || process.argv.includes("-v");
function vlog(...args: any[]) {
  if (isVerbose) console.log(...args);
}

// Define custom types to help with type checking
interface ToolCall {
  id: string;
  name: string;
  arguments: any;
}

class MultiServerManager {
  private servers: Map<string, { 
    client: Client, 
    config: any,
    capabilities: { 
      tools: any[], 
      resources: any[], 
      resourceTemplates: any[],
      prompts: any[] 
    }
  }> = new Map();
  
  async addServer(id: string, transport: Transport): Promise<boolean> {
    try {
      // Create client
      const client = new Client(
        { name: 'MultiServerClient', version: '1.0.0' },
        { capabilities: { tools: {}, resources: {}, prompts: {} } }
      );
      
      // Connect and initialize
      await client.connect(transport);

      // Discover capabilities
      const [tools] = await Promise.all([
        client.listTools(),
        // client.listResources(),
        // client.listPrompts()
      ]);
      
      // Store server information
      this.servers.set(id, {
        client,
        capabilities: {
          tools: tools.tools,
          resources: [],
          resourceTemplates: [],
          prompts: []
        }
      });
      
      console.log(`Server ${id} added successfully`);
      return true;
    } catch (error) {
      console.error(`Error adding server ${id}:`, error);
      return false;
    }
  }
  
  getClient(id: string): Client | null {
    return this.servers.get(id)?.client || null;
  }
  
  getServerInfo(id: string): any {
    return this.servers.get(id);
  }
  
  getServers(): string[] {
    return Array.from(this.servers.keys());
  }
  
  async removeServer(id: string): Promise<boolean> {
    const server = this.servers.get(id);
    if (!server) return false;
    
    try {
      await server.client.close();
      this.servers.delete(id);
      console.log(`Server ${id} removed successfully`);
      return true;
    } catch (error) {
      console.error(`Error removing server ${id}:`, error);
      return false;
    }
  }
  
  // Get all tools across all servers
  getAllTools(): { serverId: string, tool: any }[] {
    const allTools: { serverId: string, tool: any }[] = [];
    
    for (const [id, server] of this.servers.entries()) {
      for (const tool of server.capabilities.tools) {
        allTools.push({ serverId: id, tool });
      }
    }
    
    return allTools;
  }
  
  // Find a specific tool across all servers
  findTool(toolName: string): { serverId: string, tool: any } | null {
    for (const [id, server] of this.servers.entries()) {
      const tool = server.capabilities.tools.find(t => t.name === toolName);
      if (tool) return { serverId: id, tool };
    }
    return null;
  }
  
  // Execute a tool on the appropriate server
  async executeTool(toolName: string, args: any): Promise<any> {
    const toolInfo = this.findTool(toolName);
    if (!toolInfo) {
      throw new Error(`Tool ${toolName} not found on any server`);
    }
    
    const client = this.getClient(toolInfo.serverId);
    if (!client) {
      throw new Error(`Client for server ${toolInfo.serverId} not found`);
    }
    
    console.log(`Executing tool ${toolName} on server ${toolInfo.serverId}`);
    return await client.callTool({
      name: toolName,
      arguments: args
    });;
  }
  
  async close(): Promise<void> {
    const closePromises = Array.from(this.servers.entries()).map(async ([id, server]) => {
      try {
        await server.client.close();
        console.log(`Server ${id} closed successfully`);
      } catch (error) {
        console.error(`Error closing server ${id}:`, error);
      }
    });
    
    await Promise.all(closePromises);
    this.servers.clear();
  }
}

// OpenAI client implementation
class LLMClient {  
  public totalTokens: number = 0; // Adicionado para acumular tokens
  private openai: OpenAI;
  
  constructor() {
    vlog(process.env.OPENAI_API_KEY)
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async sendMessage(messages: any[], options: { tools?: any[] } = {}) {
    console.log('Sending to OpenAI...');
    
    try {
      const params: OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming = {
        model: "gpt-4o-mini",
        messages: messages.map(message => {
          if(message.tool_calls) {
            return {
              ...message,
              tool_calls: message.tool_calls.map(call => ({
                id: call.id,
                type: 'function',
                function: {
                  name: call.name,
                  arguments: call.arguments
                }
              }))
            }
          }
          
          return message
        }),
        tools: options.tools?.map(tool => ({
          type: 'function',
          function: {
            name: tool.name,
            description: tool.description,
            parameters: tool.inputSchema.properties ? {
              type: 'object',
              properties: tool.inputSchema.properties
            } : {}
          }
        })),
      }

      vlog(JSON.stringify(params, null, 2))

      const response = await this.openai.chat.completions.create(params);

      // Acumula os tokens reais do response
      if (response.usage?.total_tokens) {
        this.totalTokens += response.usage.total_tokens;
      }

      vlog('Resposta: ', JSON.stringify(response, null, 2))
      
      return response.choices[0].message;
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      throw error;
    }
  }
}

class MCPLLMApplication {
  private mcpClient: Client;
  private manager: MultiServerManager;
  private llmClient: LLMClient;
  private messages: any[] = [];
  private toolDefinitions: any[] = [];
  private rl: Interface;
  
  constructor() {
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  
  async initialize() {
    console.log('Initializing MCP client...');
    
    this.manager = new MultiServerManager();

    // const transportResend = createTransport("https://server.smithery.ai/@resend/mcp-send-email", {
    //   "resendApiKey": process.env.RESEND_API_KEY,
    // })

    const transportResend = new StdioClientTransport({
      command: 'node',
      args: [
        '--env-file=/home/saymon/Projects/My/wongames-mcp/.env',
        '/home/saymon/Projects/My/wongames-mcp/src/resend-server.ts'
      ]
    });

    const transportWongames = new StdioClientTransport({
      command: 'node',
      args: ['/home/saymon/Projects/My/wongames-mcp/src/server.ts']
    });
  
      // Add servers
      await this.manager.addServer('resend', transportResend);
      await this.manager.addServer('wongames', transportWongames);
      
  
    
    // Create LLM client
    this.llmClient = new LLMClient();
    
    // Discover tools
    console.log('Discovering tools...');
    const toolsResult = this.manager.getAllTools();

    // Format tools for LLM
    this.toolDefinitions = toolsResult.map(server => server.tool);
    
    console.log(`Discovered ${this.toolDefinitions.length} tools`);
    
    return this;
  }
  
  async runConversation() {
    console.log('\nWelcome to the MCP LLM Application!');
    console.log('Type your messages below. Type "exit" to quit.\n');

    const run_tools = async (tools: any[]) => {
      console.log('\nAssistant wants to use tools:');
        
      // Process each tool call
      for await (const rawToolCall of tools) {
        // Cast to our custom type after extracting the needed properties
        const toolCall: ToolCall = {
          id: rawToolCall.id,
          name: (rawToolCall as any).function?.name || 'unknown',
          arguments: JSON.parse((rawToolCall as any).function?.arguments || '{}')
        };
        
        console.log(`- ${toolCall.name} with args: ${JSON.stringify(toolCall.arguments)}`);
        
        // Ask for approval
        const approved = await this.promptYesNo('Approve tool execution? (y/n): ');
        
        if (approved) {
          console.log(`Executing tool ${toolCall.name}...`);
          
          try {
            // Call the tool
            const toolResult = await this.manager.executeTool(toolCall.name, toolCall.arguments);
            
            // Add tool call to history
            this.messages.push({
              role: 'assistant',
              content: null,
              tool_calls: [
                {
                  id: toolCall.id,
                  name: toolCall.name,
                  arguments: JSON.stringify(toolCall.arguments)
                }
              ]
            });
            
            // Add tool result to history
            const resultContent = toolResult.content as any;
            this.messages.push({
              role: 'tool',
              tool_call_id: toolCall.id,
              content: toolResult.isError ? 
                `Error: ${resultContent[0].text}` : 
                resultContent[0].text
            });
            
            vlog('Tool result:', resultContent[0].text);

            const llmResponseWithTools = await this.llmClient.sendMessage(this.messages, {
              tools: this.toolDefinitions
            });

            if(llmResponseWithTools.tool_calls?.length && llmResponseWithTools.tool_calls?.length > 0) {
              await run_tools(llmResponseWithTools.tool_calls)
            }
            
          } catch (error) {
            console.error(`Error executing tool: ${error.message}`);
            
            // Add error to history
            this.messages.push({
              role: 'tool',
              tool_call_id: toolCall.id,
              content: `Error: ${error.message}`
            });
          }
        } else {
          console.log('Tool execution denied.');
          
          // Add denial to history
          this.messages.push({
            role: 'system',
            content: `Tool call to ${toolCall.name} was denied by the user.`
          });
        }
      }
    }
    
    while (true) {
      const userMessage = await this.promptUser('You: ');
      
      if (userMessage.toLowerCase() === 'exit') {
        break;
      }
      
      // Add user message to history
      this.messages.push({
        role: 'user',
        content: userMessage
      });
      
      // Send to LLM
      const llmResponse = await this.llmClient.sendMessage(this.messages, {
        tools: this.toolDefinitions
      });
      
      // Check for tool calls
      if (llmResponse.tool_calls && llmResponse.tool_calls.length > 0) {
        await run_tools(llmResponse.tool_calls)

         // Get final response with tool results
        const finalResponse = await this.llmClient.sendMessage(this.messages, {
          tools: this.toolDefinitions
        });
        
        console.log('\nAssistant:', finalResponse.content);
        
        // Add final response to history
        this.messages.push({
          role: 'assistant',
          content: finalResponse.content
        });
      } else {
        // Normal response
        console.log('\nAssistant:', llmResponse.content);
        
        // Add response to history
        this.messages.push({
          role: 'assistant',
          content: llmResponse.content
        });
      }
      
      console.log(); // Empty line for readability
    }
    // Exibe o total real de tokens gastos baseado no retorno do LLMClient
    console.log(`Resumo de tokens gastos: ${this.llmClient.totalTokens} tokens`);
    console.log('Goodbye!');
  }
  
  async close() {
    this.rl.close();
    await this.manager.close();
  }
  
  private promptUser(prompt: string): Promise<string> {
    return new Promise(resolve => {
      this.rl.question(prompt, answer => {
        resolve(answer);
      });
    });
  }
  
  private async promptYesNo(prompt: string): Promise<boolean> {
    const answer = await this.promptUser(prompt);
    return answer.toLowerCase().startsWith('y');
  }
}

// Run the application
async function main() {
  const app = new MCPLLMApplication();
  
  try {
    await app.initialize();
    await app.runConversation();
  } catch (error) {
    console.error('Application error:', error);
  } finally {
    await app.close();
  }
}

main();