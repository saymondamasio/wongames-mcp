import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import OpenAI from 'openai';
import { createInterface, Interface } from 'readline';
// import { ChatCompletionMessageToolCall } from 'openai/resources.mjs';
process.loadEnvFile('./.env')

// Define custom types to help with type checking
interface ToolCall {
  id: string;
  name: string;
  arguments: any;
}

// OpenAI client implementation
class LLMClient {  
  private openai: OpenAI;
  
  constructor() {
    console.log(process.env.OPENAI_API_KEY)
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async sendMessage(messages: any[], options: { tools?: any[] } = {}) {
    console.log('Sending to OpenAI...');
    
    try {
      console.log(JSON.stringify({
        model: "gpt-4o-mini",
        messages: messages.map(message => {
          if(message.tool_calls) {
            return message.tool_calls.map(call => ({
              id: call.id,
              type: 'function',
              function: {
                name: call.name,
                arguments: call.arguments
              }
            }))
          }
          
          return message
        }),
        tools: options.tools?.map(tool => ({
          type: 'function',
          function: {
            ...tool,
            parameters: tool.parameters.properties ? tool.parameters : {}
          }
        })),
      }, null, 2))

      const response = await this.openai.chat.completions.create({
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
            ...tool,
            parameters: tool.parameters.properties ? tool.parameters : {}
          }
        })),
      });

      console.log('Resposta: ', JSON.stringify(response, null, 2))
      
      return response.choices[0].message;
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      throw error;
    }
  }
}

class MCPLLMApplication {
  private mcpClient: Client;
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
    
    // Create and connect MCP client
    this.mcpClient = new Client(
      { name: 'CompleteLLMApp', version: '1.0.0' },
      { capabilities: { tools: {}, resources: {}, prompts: {} } }
    );
    
    const transport = new StdioClientTransport({
      command: 'node',
      args: ['/home/saymon/Projects/My/wongames-mcp/src/server.ts']
    });
    
    await this.mcpClient.connect(transport);
    
    // Create LLM client
    this.llmClient = new LLMClient();
    
    // Discover tools
    console.log('Discovering tools...');
    const toolsResult = await this.mcpClient.listTools();

    console.log(toolsResult.tools)
    
    // Format tools for LLM
    this.toolDefinitions = toolsResult.tools.map(tool => ({
      name: tool.name,
      description: tool.description || `Tool: ${tool.name}`,
      parameters: tool.inputSchema
    }));
    
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
            const toolResult = await this.mcpClient.callTool({
              name: toolCall.name,
              arguments: toolCall.arguments
            });
            
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
            
            console.log('Tool result:', resultContent[0].text);

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
    
    console.log('Goodbye!');
  }
  
  async close() {
    this.rl.close();
    await this.mcpClient.close();
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