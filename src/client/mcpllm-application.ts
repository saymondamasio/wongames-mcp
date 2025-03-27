import { createInterface, Interface } from 'readline';
import { MultiServerManager } from './multi-server-manager.ts';
import { LLMClient } from './llm-client.ts';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import { vlog } from '../utils/logger.ts';

interface ToolCall {
  id: string;
  name: string;
  arguments: any;
}

export class MCPLLMApplication {
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

    const transportResend = new SSEClientTransport(
      new URL("http://localhost:3001/sse")
    );
  

    const transportWongames = new SSEClientTransport(
      new URL("http://localhost:3000/sse")
    );
  
      // Add servers
      await this.manager.addServer('wongames', transportWongames);
      await this.manager.addServer('resend', transportResend);
      
  
    
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