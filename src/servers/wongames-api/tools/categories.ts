import { TOOL_CONFIG } from '../config/api.ts';
import { fetchCategories } from '../services/api.ts';
import type {  McpResponse, McpTextContent } from "../types/index.ts";

/**
 * MCP tool definition for getting posts
 */
export const getCategoriesTool = {
  name: TOOL_CONFIG.categories.name,
  description: TOOL_CONFIG.categories.description,
  handler: async (): Promise<McpResponse> => {
    try {
      const result = await fetchCategories();

      if (!result.categories) {
        throw new Error('No results returned from API');
      }

      const content: McpTextContent = {
        type: "text",
        text: `Categories Results:\n\n${JSON.stringify(result.categories, null, 2)}`
      };

      return {
        content: [content],
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Failed to fetch categories: ${errorMessage}`);
    }
  }
}; 