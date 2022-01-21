import { gql } from '@apollo/client';
import { gql } from '@apollo/client';

export const CITY_FRAGMENT = gql`
  fragment City on cities {
      name
      country
      visited
      wishlist
      id
  }
`;
