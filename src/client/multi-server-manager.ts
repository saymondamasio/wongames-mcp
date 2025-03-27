import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';

export class MultiServerManager {
  private servers: Map<string, { 
    client: Client, 
    capabilities: { 
      tools: any[], 
      resources: any[], 
      resourceTemplates: any[],
      prompts: any[] 
    }
  }> = new Map();
  
  async addServer(id: string, transport: Transport): Promise<boolean> {
    try {
      // Create client
      const client = new Client(
        { name: 'MultiServerClient', version: '1.0.0' },
        { capabilities: { tools: {}, resources: {}, prompts: {} } }
      );
      
      // Connect and initialize
      await client.connect(transport);

      // Discover capabilities
      const [tools] = await Promise.all([
        client.listTools(),
        // client.listResources(),
        // client.listPrompts()
      ]);
      
      // Store server information
      this.servers.set(id, {
        client,
        capabilities: {
          tools: tools.tools,
          resources: [],
          resourceTemplates: [],
          prompts: []
        }
      });
      
      console.log(`Server ${id} added successfully`);
      return true;
    } catch (error) {
      console.error(`Error adding server ${id}:`, error);
      return false;
    }
  }
  
  getClient(id: string): Client | null {
    return this.servers.get(id)?.client || null;
  }
  
  getServerInfo(id: string): any {
    return this.servers.get(id);
  }
  
  getServers(): string[] {
    return Array.from(this.servers.keys());
  }
  
  async removeServer(id: string): Promise<boolean> {
    const server = this.servers.get(id);
    if (!server) return false;
    
    try {
      await server.client.close();
      this.servers.delete(id);
      console.log(`Server ${id} removed successfully`);
      return true;
    } catch (error) {
      console.error(`Error removing server ${id}:`, error);
      return false;
    }
  }
  
  // Get all tools across all servers
  getAllTools(): { serverId: string, tool: any }[] {
    const allTools: { serverId: string, tool: any }[] = [];
    
    for (const [id, server] of this.servers.entries()) {
      for (const tool of server.capabilities.tools) {
        allTools.push({ serverId: id, tool });
      }
    }
    
    return allTools;
  }
  
  // Find a specific tool across all servers
  findTool(toolName: string): { serverId: string, tool: any } | null {
    for (const [id, server] of this.servers.entries()) {
      const tool = server.capabilities.tools.find(t => t.name === toolName);
      if (tool) return { serverId: id, tool };
    }
    return null;
  }
  
  // Execute a tool on the appropriate server
  async executeTool(toolName: string, args: any): Promise<any> {
    const toolInfo = this.findTool(toolName);
    if (!toolInfo) {
      throw new Error(`Tool ${toolName} not found on any server`);
    }
    
    const client = this.getClient(toolInfo.serverId);
    if (!client) {
      throw new Error(`Client for server ${toolInfo.serverId} not found`);
    }
    
    console.log(`Executing tool ${toolName} on server ${toolInfo.serverId}`);
    return await client.callTool({
      name: toolName,
      arguments: args
    });;
  }
  
  async close(): Promise<void> {
    const closePromises = Array.from(this.servers.entries()).map(async ([id, server]) => {
      try {
        await server.client.close();
        console.log(`Server ${id} closed successfully`);
      } catch (error) {
        console.error(`Error closing server ${id}:`, error);
      }
    });
    
    await Promise.all(closePromises);
    this.servers.clear();
  }
}