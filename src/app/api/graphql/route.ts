import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";

// Create the Yoga server
const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers
  }),

  // Configure the GraphQL endpoint
  graphqlEndpoint: "/api/graphql",

  // Use the Fetch API
  fetchAPI: { Response }
});

// Export the handler for GET, POST, and OPTIONS requests

export async function POST(request: Request) {

  const ctx = {}; // TODO: Add context
  return handleRequest(request, ctx);
}
