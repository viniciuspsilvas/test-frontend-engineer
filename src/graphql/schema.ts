import { gql } from "graphql-tag";

export const typeDefs = gql`
  # Represents a product in the store
  type Product {
    id: ID!
    title: String!
    price: Float!
    category: String!
    description: String!
    image: String!
  }

  # Represents a user's cart
  type Cart {
    id: ID!
    userId: ID!
    date: String! # Date in ISO format (e.g., "2023-10-01")
    products: [Product!]! # List of products in the cart
  }

  # Represents a user
  type User {
    id: ID!
    email: String!
    username: String!
    password: String!
    name: String! # User's full name (e.g., "John Doe")
    phone: String!
  }

  # type PaginatedProducts {
  #   data: [Product!]!
  #   total: Int!
  #   page: Int!
  #   limit: Int!
  #   hasMore: Boolean!
  # }


  # Root Query type
  type Query {
    # Fetch all products
    products: [Product!]!
    # products(page: Int, limit: Int): PaginatedProducts!

    # Fetch a product by ID
    product(id: ID!): Product

    # Fetch a user's cart by user ID
    cart(userId: ID!): Cart

    # Fetch a user by ID
    user(id: ID!): User
  }
`;