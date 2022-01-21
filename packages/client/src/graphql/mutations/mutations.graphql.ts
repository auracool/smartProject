import { gql } from '@apollo/client';

export const UPDATE_CITY_VISITED_WISHLIST = gql`
mutation UpdateCity($input: CitiesMutationInput) {
  updateCity(input: $input) {
    visited
    wishlist
    country
    name
    id
  }
  }
`;
