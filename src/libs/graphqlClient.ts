import {
  request as graphqlRequest,
  RequestDocument,
  Variables
} from "graphql-request";

export const API_URL = "http://localhost:3000/api/graphql";

export const request = async <T = unknown, V = Variables>(
  document: RequestDocument,
  variables?: V
): Promise<T> => {
  // @ts-expect-error: temporary ignore the typings
  return await graphqlRequest<T, V>(API_URL, document, variables);
};
