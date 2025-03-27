import { MCPLLMApplication } from "./mcpllm-application.ts";

async function main() {
  const app = new MCPLLMApplication();
  
  try {
    await app.initialize();
    await app.runConversation();
  } catch (error) {
    console.error('Application error:', error);
  } finally {
    await app.close();
  }
}

main();