import { Product } from "@/gql/graphql";
import { GET_PRODUCTS } from "@/graphql/queries";
import { request } from "@/libs/graphqlClient";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const result = await request<{ products: Product[] }>(GET_PRODUCTS);
  return result.products;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });
};
