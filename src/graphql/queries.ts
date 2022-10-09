import { gql } from "@apollo/client";

export const getProductList = gql`
  query products {
    products {
      items {
        id
        name
        description
      }
    }
  }
`;

