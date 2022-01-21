import React,{ useEffect }  from 'react'
import type { FC } from 'react'
import { Container, Heading,Button,UnorderedList } from '@chakra-ui/react'
import  { useFindIfCityVisitedOrWishlistQuery }  from '../../generated/graphql'
import CityItem from '../home/cityComponents/CityItem'


/**
 * WishList component responsible for
 * showing the user all their places they wish to go
 */

//Im aware some reuse here with visited page perhaps i could
export const WishList: FC = () => {

// One query saving on 2 potential calls (visited and wishlist)
  const  { loading, error, data, refetch }  = useFindIfCityVisitedOrWishlistQuery({variables :{
 "filter": {
   "wishlist": true
 }
}});

useEffect(() => {

  refetch();

     // This is be executed when `loading` state changes
}, [data])


if(error){

  return( <p> Error found in this application. Please standyby while we resolve this issue.  </p>);
}

return (

  <>

    <Heading as="h1">You have  {data?.cities.total} places in your wishlist </Heading>
    <Container centerContent maxW="container.md" flexDir="row">
    <UnorderedList>
    {data?.cities.cities.map((city) =>
  <CityItem key={city.id} {...city}/>
    )};





    </UnorderedList>

    </Container>

  </>



)

  //Not implemented due to time but pagination would be implemented above
};
