import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CitiesFilters = {
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  visited?: InputMaybe<Scalars['Boolean']>;
  wishlist?: InputMaybe<Scalars['Boolean']>;
};

export type CitiesMutationInput = {
  id?: InputMaybe<Scalars['Int']>;
  visited?: InputMaybe<Scalars['Boolean']>;
  wishlist?: InputMaybe<Scalars['Boolean']>;
};

export type CitiesResult = {
  __typename?: 'CitiesResult';
  cities?: Maybe<Array<Maybe<City>>>;
  total?: Maybe<Scalars['Int']>;
};

export type City = {
  __typename?: 'City';
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  visited?: Maybe<Scalars['Boolean']>;
  wishlist?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateCity?: Maybe<City>;
};


export type MutationUpdateCityArgs = {
  input?: InputMaybe<CitiesMutationInput>;
};

export type Query = {
  __typename?: 'Query';
  cities?: Maybe<CitiesResult>;
  city?: Maybe<City>;
};


export type QueryCitiesArgs = {
  filter?: InputMaybe<CitiesFilters>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryCityArgs = {
  id: Scalars['Int'];
};

export type UpdateCityMutationVariables = Exact<{
  input?: InputMaybe<CitiesMutationInput>;
}>;


export type UpdateCityMutation = { __typename?: 'Mutation', updateCity?: { __typename?: 'City', visited?: boolean | null | undefined, wishlist?: boolean | null | undefined, country?: string | null | undefined, name?: string | null | undefined, id?: number | null | undefined } | null | undefined };

export type QueryFindCityQueryVariables = Exact<{
  filter?: InputMaybe<CitiesFilters>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type QueryFindCityQuery = { __typename?: 'Query', cities?: { __typename?: 'CitiesResult', cities?: Array<{ __typename?: 'City', name?: string | null | undefined, country?: string | null | undefined, visited?: boolean | null | undefined, wishlist?: boolean | null | undefined, id?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type FindIfCityVisitedOrWishlistQueryVariables = Exact<{
  filter?: InputMaybe<CitiesFilters>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type FindIfCityVisitedOrWishlistQuery = { __typename?: 'Query', cities?: { __typename?: 'CitiesResult', total?: number | null | undefined, cities?: Array<{ __typename?: 'City', id?: number | null | undefined, name?: string | null | undefined, country?: string | null | undefined, visited?: boolean | null | undefined, wishlist?: boolean | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const UpdateCityDocument = gql`
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
export type UpdateCityMutationFn = Apollo.MutationFunction<UpdateCityMutation, UpdateCityMutationVariables>;

/**
 * __useUpdateCityMutation__
 *
 * To run a mutation, you first call `useUpdateCityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCityMutation, { data, loading, error }] = useUpdateCityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCityMutation, UpdateCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCityMutation, UpdateCityMutationVariables>(UpdateCityDocument, options);
      }
export type UpdateCityMutationHookResult = ReturnType<typeof useUpdateCityMutation>;
export type UpdateCityMutationResult = Apollo.MutationResult<UpdateCityMutation>;
export type UpdateCityMutationOptions = Apollo.BaseMutationOptions<UpdateCityMutation, UpdateCityMutationVariables>;
export const QueryFindCityDocument = gql`
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

/**
 * __useQueryFindCityQuery__
 *
 * To run a query within a React component, call `useQueryFindCityQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryFindCityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryFindCityQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useQueryFindCityQuery(baseOptions?: Apollo.QueryHookOptions<QueryFindCityQuery, QueryFindCityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryFindCityQuery, QueryFindCityQueryVariables>(QueryFindCityDocument, options);
      }
export function useQueryFindCityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryFindCityQuery, QueryFindCityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryFindCityQuery, QueryFindCityQueryVariables>(QueryFindCityDocument, options);
        }
export type QueryFindCityQueryHookResult = ReturnType<typeof useQueryFindCityQuery>;
export type QueryFindCityLazyQueryHookResult = ReturnType<typeof useQueryFindCityLazyQuery>;
export type QueryFindCityQueryResult = Apollo.QueryResult<QueryFindCityQuery, QueryFindCityQueryVariables>;
export const FindIfCityVisitedOrWishlistDocument = gql`
    query findIfCityVisitedOrWishlist($filter: CitiesFilters, $limit: Int, $offset: Int) {
  cities(filter: $filter, limit: $limit, offset: $offset) {
    cities {
      id
      name
      country
      visited
      wishlist
    }
    total
  }
}
    `;

/**
 * __useFindIfCityVisitedOrWishlistQuery__
 *
 * To run a query within a React component, call `useFindIfCityVisitedOrWishlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindIfCityVisitedOrWishlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindIfCityVisitedOrWishlistQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFindIfCityVisitedOrWishlistQuery(baseOptions?: Apollo.QueryHookOptions<FindIfCityVisitedOrWishlistQuery, FindIfCityVisitedOrWishlistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindIfCityVisitedOrWishlistQuery, FindIfCityVisitedOrWishlistQueryVariables>(FindIfCityVisitedOrWishlistDocument, options);
      }
export function useFindIfCityVisitedOrWishlistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindIfCityVisitedOrWishlistQuery, FindIfCityVisitedOrWishlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindIfCityVisitedOrWishlistQuery, FindIfCityVisitedOrWishlistQueryVariables>(FindIfCityVisitedOrWishlistDocument, options);
        }
export type FindIfCityVisitedOrWishlistQueryHookResult = ReturnType<typeof useFindIfCityVisitedOrWishlistQuery>;
export type FindIfCityVisitedOrWishlistLazyQueryHookResult = ReturnType<typeof useFindIfCityVisitedOrWishlistLazyQuery>;
export type FindIfCityVisitedOrWishlistQueryResult = Apollo.QueryResult<FindIfCityVisitedOrWishlistQuery, FindIfCityVisitedOrWishlistQueryVariables>;