import { MCPLLMApplication } from "./mcpllm-application.ts";

import {Server} from "socket.io";

const SERVER_PORT = 8000;
const server = new Server(SERVER_PORT,{
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});
let
    sequenceNumberByClient = new Map();

// event fired every time a new client connects:
server.on("connection",  async (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    sequenceNumberByClient.set(socket, 1);

    const app = new MCPLLMApplication(socket);
  
    try {
      await app.initialize();
    } catch (error) {
      console.error('Application error:', error);
      await app.close();
    } finally {
    }

    // when socket disconnects, remove it from the list:
    socket.on("disconnect", async () => {
        sequenceNumberByClient.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
        await app.close();
    });
});
