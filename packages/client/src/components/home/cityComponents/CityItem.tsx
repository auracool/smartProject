import React , { useState ,useEffect, ChangeEvent}  from 'react'
import type { FC } from 'react'
import { Button,Box,Image,Badge, CheckboxGroup ,Checkbox ,Stack,Spinner} from '@chakra-ui/react'
import { City } from '../../../generated/graphql'
import { useUpdateCityMutation } from '../../../generated/graphql'



/**
 * CityItem component responsible for mananging the state
 * of WishList and Visited
 */

export const CityItem : FC<City> = (props:City) => {

//Utils for styling
 const listLayout = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Beautiful holiday destination',
    message: 'Please check covid restrictions before booking'

  }




//potential to retun these as objeccts instead of seperate
  const [wishListState, setWishListState] = useState<Boolean>(props.wishlist);
   const [visitedState, setVisitedState] = useState<boolean>(props.visited);

//Trigger query after change to state
   useEffect(() => {

     //1 call updates two queries
updateWishListOrVisitedCheckbox();


   },[wishListState,visitedState]);

//Querying graphQL with stricty Typinf via codegen magic
   const [updateWishListOrVisitedCheckbox, { data, loading, error }] = useUpdateCityMutation({variables :{
  "input": {"id": props.id,
    "visited": visitedState,
    "wishlist": wishListState
  }
}});



return (
<>
{loading && (
  <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />

)}


  <Box key={props.id} maxW='sm'  borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={listLayout.imageUrl} alt={listLayout.imageAlt} />

        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
          {props.wishlist == true && (
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              In your wishlist
            </Badge>

          )}
          {props.visited == true && (
            <Badge borderRadius='full' px='2' colorScheme='purple'>
              You visited this city
            </Badge>

          )}
            </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {props.name} :
              {props.country}
          </Box>

          <Box>

            {listLayout.message}
          </Box>

          <Box display='flex' mt='2' alignItems='center'>


              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox isChecked={wishListState} onChange={e => setWishListState(e.target.checked)}>Add to wishlist?</Checkbox>
                <Checkbox isChecked={visitedState} onChange={e => setVisitedState(e.target.checked)}>Add to visited?</Checkbox>

              </Stack>

          </Box>
        </Box>
      </Box>




  </>



)
}

export default CityItem;
