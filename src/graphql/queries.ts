import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      price
      category
      description
      image
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    product(id: $id) {
      id
      title
      price
      category
      description
      image
    }
  }
`;
