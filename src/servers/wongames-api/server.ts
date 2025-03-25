import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { SERVER_CONFIG } from "./config/api.ts";
import { getGamesTool } from "./tools/games.ts";
import { getPlatformsTool } from "./tools/platforms.ts";
import { getCategoriesTool } from "./tools/categories.ts";
import { getPublishersTool } from "./tools/publishers.ts";
import { getDevelopersTool } from "./tools/developers.ts";

import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import express from 'express';


process.loadEnvFile('./.env')

const app = express()

const server = new McpServer({
  name: SERVER_CONFIG.name,
  version: SERVER_CONFIG.version,
  description: SERVER_CONFIG.description,
});


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

server.tool(
  getGamesTool.name,
  getGamesTool.description,
  getGamesTool.parameters,
  getGamesTool.handler
);

let transport: SSEServerTransport | null = null;

app.get('/sse', async (req, res)=> {
  console.log('sse');
  transport = new SSEServerTransport('/messages', res);

  await server.connect(transport);
})

app.post("/messages", async (req, res) => {
  console.log('messages', req.body);
  if(transport)
    await transport.handlePostMessage(req, res);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});