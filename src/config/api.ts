import { createClient } from "../../generated/index.ts";


// GraphQL API endpoint
export const GRAPHQL_API = 'http://localhost:1337/graphql';

// Initialize the GraphQL client
export const client = createClient({
  url: GRAPHQL_API,
});

// Tool configurations
export const TOOL_CONFIG = {
  games: {
    name: "get_games",
    description: "Get a list of games with optional filtering and pagination."
  },
  platforms: {
    name: "get_platforms",
    description: "Get a list of platforms. Check if the platform the user requested exists"
  }
};

// Server configuration
export const SERVER_CONFIG = {
  name: "wongames-api-service",
  version: "1.0.0",
  description: "",
}; 