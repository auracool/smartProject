import { gql } from '@apollo/client';

export const LIST_CITIES = gql`
query QueryFindCity($filter: CitiesFilters, $limit: Int, $offset: Int) {
  cities(filter: $filter, limit: $limit, offset: $offset) {
    cities {
      name
      country
      visited
      wishlist
      id
    }
  }

}
`;

export const GET_CITIES_BASED_ON_VISITED_WISHLIST = gql`
query findIfCityVisitedOrWishlist($filter: CitiesFilters, $limit: Int,$offset: Int) {
  cities(filter: $filter, limit: $limit,offset:$offset) {
    cities {
      id
      name
      country
      visited
      wishlist
    }
    total
  }
}`;
