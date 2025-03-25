import { fetchDevelopers } from '../services/api.ts';
import { TOOL_CONFIG } from '../config/api.ts';
import type {  McpResponse, McpTextContent } from "../types/index.ts";

/**
 * MCP tool definition for getting posts
 */
export const getDevelopersTool = {
  name: TOOL_CONFIG.developers.name,
  description: TOOL_CONFIG.developers.description,
  handler: async (): Promise<McpResponse> => {
    try {
      const result = await fetchDevelopers();

      if (!result.developers) {
        throw new Error('No results returned from API');
      }

      const content: McpTextContent = {
        type: "text",
        text: `Developers Results:\n\n${JSON.stringify(result.developers, null, 2)}`
      };

      return {
        content: [content],
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Failed to fetch developers: ${errorMessage}`);
    }
  }
}; 