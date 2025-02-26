import { useQuery } from "@tanstack/react-query";
import { GET_PRODUCT_BY_ID } from "@/graphql/queries";
import { request } from "@/libs/graphqlClient";
import { Product } from "@/gql/graphql";

const fetchProduct = async (id: string) => {
  const result = await request<{ product: Product }>(GET_PRODUCT_BY_ID, { id });
  return result.product;
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id // Only fetch if the ID is available
  });
};
