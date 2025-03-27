import { createInterface, Interface } from 'readline';
import { MultiServerManager } from './multi-server-manager.ts';
import { LLMClient } from './llm-client.ts';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import { vlog } from '../utils/logger.ts';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';

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
  private socket: Socket;

  constructor(socket: Socket) {
    socket.on('message', async (message) => {
      const response = await this.handleUserMessage(message);
      socket.emit('response', response);
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

  private async handleUserMessage(userMessage: string): Promise<any> {
    // Add user message to history
    this.messages.push({
      role: 'user',
      content: userMessage,
    });

    // Send to LLM
    const llmResponse = await this.llmClient.sendMessage(this.messages, {
      tools: this.toolDefinitions,
    });

    if (llmResponse.tool_calls && llmResponse.tool_calls.length > 0) {
      await this.runTools(llmResponse.tool_calls);

      // Get final response with tool results
      const finalResponse = await this.llmClient.sendMessage(this.messages, {
        tools: this.toolDefinitions,
      });

      this.messages.push({
        role: 'assistant',
        content: finalResponse.content,
      });

      return finalResponse;
    } else {
      this.messages.push({
        role: 'assistant',
        content: llmResponse.content,
      });

      return llmResponse;
    }
  }

  private async runTools(tools: any[]) {
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
      // const approved = await this.promptYesNo('Approve tool execution? (y/n): ');
      
      if (true) {
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
            await this.runTools(llmResponseWithTools.tool_calls)
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
      }
    }
  }

  async close() {
    await this.manager.close();
  }
}