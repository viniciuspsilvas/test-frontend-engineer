import { Cart, Product, User } from "@/types/graphql";
import axios from "axios";
import { GraphQLError } from "graphql";

const FAKE_STORE_API = "https://fakestoreapi.com";

export const resolvers = {
  Query: {
    // Fetch all products
    products: async (): Promise<Product[]> => {
      const { data } = await axios.get(`${FAKE_STORE_API}/products`);
      return data;
    },

    // Fetch a product by ID
    product: async (_: unknown, { id }: { id: string }): Promise<Product> => {
      const { data } = await axios.get(`${FAKE_STORE_API}/products/${id}`);
      return data;
    },

    // Fetch a user's cart by user ID
    cart: async (
      _: unknown,
    ): Promise<Cart> => {
      
      // TODO: throw an error TO BE IMPLEMENTED
      throw new GraphQLError("Not implemented");
    },

    // Fetch a user by ID
    user: async (_: unknown, { id }: { id: string }): Promise<User> => {
        // TODO: throw an error TO BE IMPLEMENTED
        throw new GraphQLError("Not implemented");
    },
  },
};