import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { SERVER_CONFIG } from "./config/api.ts";
import { getGamesTool } from "./tools/games.ts";
import { getPlatformsTool } from "./tools/platforms.ts";
import { getCategoriesTool } from "./tools/categories.ts";
import { getPublishersTool } from "./tools/publishers.ts";
import { getDevelopersTool } from "./tools/developers.ts";

/**
 * Initialize the MCP server and register all tools
 */
async function initializeServer() {
  // Create server instance
  const server = new McpServer({
    name: SERVER_CONFIG.name,
    version: SERVER_CONFIG.version,
    description: SERVER_CONFIG.description,
  });

  // Register all tools
  server.tool(
    getGamesTool.name,
    getGamesTool.description,
    getGamesTool.parameters,
    getGamesTool.handler
  );

  server.tool(
    getPlatformsTool.name,
    getPlatformsTool.description,
    getPlatformsTool.handler
  );

  server.tool(
    getCategoriesTool.name,
    getCategoriesTool.description,
    getCategoriesTool.handler
  );

  server.tool(
    getPublishersTool.name,
    getPublishersTool.description,
    getPublishersTool.handler
  );

  
  server.tool(
    getDevelopersTool.name,
    getDevelopersTool.description,
    getDevelopersTool.handler
  );

  return server;
}

/**
 * Main entry point
 */
async function main() {
  // Initialize the server
  const server = await initializeServer();
  
  // Connect to stdio transport
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // console.error for claude-desktop so it won't process this output
  console.error("API MCP Server running on stdio");
}

// Start the server
main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
}); 
