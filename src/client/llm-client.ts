import OpenAI from 'openai';
import { vlog } from '../utils/logger.ts';

export class LLMClient {  
  public totalTokens: number = 0;
  private openai: OpenAI;
  
  constructor() {
    vlog(process.env.OPENAI_API_KEY);
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async sendMessage(messages: any[], options: { tools?: any[] } = {}) {
    console.log('Sending to OpenAI...');
    
    try {
      const params: OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming = {
        model: "gpt-4o-mini",
        store: true,
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
        user: `user-${Math.random().toString(36).substr(2, 9)}`,
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