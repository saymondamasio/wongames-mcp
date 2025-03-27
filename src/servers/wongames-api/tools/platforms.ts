import { fetchPlatforms } from '../services/api.ts';
import { TOOL_CONFIG } from '../config/api.ts';
import type {  McpResponse, McpTextContent } from "../types/index.ts";

/**
 * MCP tool definition for getting posts
 */
export const getPlatformsTool = {
  name: TOOL_CONFIG.platforms.name,
  description: TOOL_CONFIG.platforms.description,
  handler: async (): Promise<McpResponse> => {
    try {
      const result = await fetchPlatforms();

      if (!result.platforms) {
        throw new Error('No results returned from API');
      }

      const content: McpTextContent = {
        type: "text",
        text: `Platforms Results:\n\n${JSON.stringify(result.platforms, null, 2)}`
      };

      return {
        content: [content],
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Failed to fetch platforms: ${errorMessage}`);
    }
  }
}; 