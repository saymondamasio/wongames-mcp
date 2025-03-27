import { fetchPublishers } from '../services/api.ts';
import { TOOL_CONFIG } from '../config/api.ts';
import type {  McpResponse, McpTextContent } from "../types/index.ts";

/**
 * MCP tool definition for getting posts
 */
export const getPublishersTool = {
  name: TOOL_CONFIG.publishers.name,
  description: TOOL_CONFIG.publishers.description,
  handler: async (): Promise<McpResponse> => {
    try {
      const result = await fetchPublishers();

      if (!result.publishers) {
        throw new Error('No results returned from API');
      }

      const content: McpTextContent = {
        type: "text",
        text: `Publishers Results:\n\n${JSON.stringify(result.publishers, null, 2)}`
      };

      return {
        content: [content],
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Failed to fetch publishers: ${errorMessage}`);
    }
  }
}; 