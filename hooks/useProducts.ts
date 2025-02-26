import { Product } from "@/gql/graphql";
import { GET_PRODUCTS } from "@/graphql/queries";
import { request } from "@/libs/graphqlClient";
import { useQuery } from "@tanstack/react-query";

// const fetchProducts = async (page: number, limit: number) => {
//   const result = await request<{ products: PaginatedResponse<Product> }>(
//     GET_PRODUCTS,
//     { page, limit }
//   );
//   return result.products.data;
// };

// export const useProducts = (page: number, limit: number) => {
//   return useQuery({
//     queryKey: ["products", page, limit],
//     queryFn: () => fetchProducts(page, limit),
//   });
// };

const fetchProducts = async () => {
  const result = await request<{ products: Product[] }>(GET_PRODUCTS);
  return result.products;
};


// Simulate pagination
export const useProducts = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts(),
    select: (data) => {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      return data.slice(startIndex, endIndex); 
    }
  });
};
