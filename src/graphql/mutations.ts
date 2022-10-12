import { gql } from "@apollo/client";

export const mutationAddItemToOrder = gql`
  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      __typename
      ... on Order {
        subTotal
      }
      __typename
      ... on NegativeQuantityError {
        message
      }
      __typename
      ... on InsufficientStockError {
        message
      }
      __typename
      ... on OrderModificationError {
        message
      }
      __typename
      ... on OrderLimitError {
        message
      }
    }
  }
`;
