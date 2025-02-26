import {
  Product,
} from "@/types/graphql";
import axios from "axios";

const FAKE_STORE_API = "https://fakestoreapi.com";

export const resolvers = {
  Query: {
    // // Fetch products with pagination
    // products: async (
    //   _: unknown,
    //   { page = 1, limit = 10 }: PaginationArgs
    // ): Promise<PaginatedResponse<Product>> => {
    //   const { data } = await axios.get(
    //     `${FAKE_STORE_API}/products?limit=${limit}&page=${page}`
    //   );

    //   // Simulate total count (since the API doesn't provide it)
    //   const totalResponse = await axios.get(`${FAKE_STORE_API}/products`);
    //   const total = totalResponse.data.length;

    //   return {
    //     data,
    //     total,
    //     page,
    //     limit,
    //     hasMore: page * limit < total
    //   };
    // },
    
    // Fetch all products (no pagination) as the API doesn't supply the page parameter, only the limit
    products: async (): Promise<Product[]> => {
      const { data } = await axios.get(`${FAKE_STORE_API}/products`);
      return data;
    },
  }
};
