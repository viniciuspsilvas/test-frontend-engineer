import { request as graphqlRequest, RequestDocument, Variables } from 'graphql-request'

const dev = process.env.NODE_ENV !== 'production'
export const API_URL = dev
  ? process.env.NEXT_PUBLIC_API_URL
  : 'https://...'

export const request = async <T = any, V = Variables>(document: RequestDocument, variables?: V): Promise<T> => {
  // @ts-ignore: temporary ignore the typings
  return await graphqlRequest<T, V>(API_URL, document, variables)
}
