import React, { useEffect} from 'react'
import type { FC } from 'react'
import { Container, Heading,Spinner,UnorderedList } from '@chakra-ui/react'
import  { useFindIfCityVisitedOrWishlistQuery }  from '../../generated/graphql'
import CityItem from '../home/cityComponents/CityItem'




//Im aware some reuse here with visited page perhaps i could
//implement a fragment or abstract this somewhat
export const Visited: FC = () => {

// One query saving on 2 potential calls (visited and wishlist)
  const  { loading, error, data, refetch }  = useFindIfCityVisitedOrWishlistQuery({variables :{
 "filter": {
   "visited": true
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

  {data?.cities.total == 1 && (
      <Heading as="h1"> You have visited  {data?.cities.total} place </Heading>
  )}
  {data?.cities.total !== 1 && (
      <Heading as="h1"> You have visited  {data?.cities.total} places </Heading>
  )}

    <Container centerContent maxW="container.md" flexDir="row">
    <UnorderedList>

    {error && <Spinner />}
    {data?.cities.cities.map((city) =>
  <CityItem key={city.id} {...city}/>
    )};





    </UnorderedList>



    </Container>
  </>



)

//Not implemented due to time but pagination would be implemented above


}
