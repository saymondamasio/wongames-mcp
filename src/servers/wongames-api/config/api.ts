import { createClient } from "../generated/index.ts";


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
    description: "Get a list of games with optional filtering and pagination. "
  },
  platforms: {
    name: "get_platforms",
    description: "Get a list of platforms."
  },
  categories: {
    name: "get_categories",
    description: "Get a list of categories. Use this tool to check if the filter exists, if necessary."
  },
  developers: {
    name: "get_developers",
    description: "Get a list of developers. Use this tool to check if the filter exists, if necessary."
  },
  publishers: {
    name: "get_publishers",
    description: "Get a list of publishers. Use this tool to check if the filter exists, if necessary."
  }
};

// Server configuration
export const SERVER_CONFIG = {
  name: "wongames-api-service",
  version: "1.0.0",
  description: "",
}; 