import { z } from "zod";

import { fetchGames } from '../services/api.ts';
import { TOOL_CONFIG } from '../config/api.ts';
import type { GamesParams, McpResponse, McpTextContent } from "../types/index.ts";

/**
 * MCP tool definition for getting posts
 */
export const getGamesTool = {
  name: TOOL_CONFIG.games.name,
  description: TOOL_CONFIG.games.description,
  parameters: {
    id: z.number().optional().describe("Filter games by ID"),
    name: z.string().optional().describe("Filter games by name"),
    start: z.number().optional().default(0).describe("Number of first entry"),
    limit: z.number().optional().default(10).describe("Maximum number of games to return"),
    price: z.object({
      gt: z.number().optional().describe("Filter games by price greater than"),
      lt: z.number().optional().describe("Filter games by price less than"),
    }).optional().describe("Filter games by price"),
    developers: z.array(z.string()).optional().describe("Filter games by developers. (e.g. CD PROJECT RED, Ubisoft, Rockstar Games)."),
    categories: z.array(z.string()).optional().describe("Filter games by categories. (e.g. action, adventure, rpg, strategy)."),
    publishers: z.array(z.string()).optional().describe("Filter games by publishers. (e.g. SEGA, CD PROJECTS, Ubisoft)."),
    platforms: z.array(z.string()).optional().describe("Filter games by platforms (e.g. 'windows', 'mac', 'linux')"),
  },
  handler: async (params: GamesParams): Promise<McpResponse> => {
    try {
      const result = await fetchGames(params);

      if (!result.games_connection) {
        throw new Error('No results returned from API');
      }

      const content: McpTextContent = {
        type: "text",
        text: `Posts Results:\n\n${JSON.stringify(result.games_connection, null, 2)}`
      };

      return {
        content: [content],
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Failed to fetch games: ${errorMessage}`);
    }
  }
}; 