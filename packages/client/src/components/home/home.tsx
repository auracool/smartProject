import React , { useState,useEffect,MouseEvent,z} from 'react'
import type { FC } from 'react'
import { Container, InputRightElement, Input, FormControl,Text,
  FormHelperText,Heading, InputGroup, IconButton, VStack, Button, ButtonGroup} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { useQueryFindCityLazyQuery,CitiesResult,CitiesFilters,QueryFindCityQuery,City,useUpdateCityMutation } from '../../generated/graphql'
import { CitySearchResults } from './cityComponents/CitySearchResults';


export const Home: FC = () => {


  const [input, setInput] = useState<string>('');


   const handleInputChange = (e) => {
     e.preventDefault();
     console.log("|Typing");
     setInput(e.target.value.replace(/[^a-zA-Z]/g, ''))

   }

   const isError = input === ''


   function handleClick(e) {
       e.preventDefault();
       console.log('The link was clicked.' + input);


    if(input.length > 0 ){
     runQuery()
    }
     }






   const [runQuery, {loading,data, error }]  = useQueryFindCityLazyQuery({variables:{
  "filter": {
    "name": input
  },
  "limit": 5,
  "offset": 0
},
     fetchPolicy: "network-only",   // Used for first execution
    nextFetchPolicy: "cache-first"
});

useEffect(() => {

  //refetch();
console.log("change query" +input);

     // This is be executed when `loading` state changes
}, [loading])



if(error){
//console.log(error.messages);
  return( <p> Error found in this application. Please standyby while we resolve this issue.  </p>);
}



return (



  <VStack spacing="8">
    <Heading as="h1">Smart traveller</Heading>
    <Container maxW="container.md">

      <InputGroup>
      //Regex operation to remove anything that doesnt match our InputType
      //React cleans input up automatically but lets keep the input clean and sanitary
        <Input id="searchCityInput" type="text" onChange={handleInputChange} placeholder='Enter a city' />
        <InputRightElement  children={<IconButton type="submit" aria-label="" type="submit" onClick={handleClick} icon={<Search2Icon />}  />} />
      </InputGroup>
<VStack spacing={3}>
  {input.length == 0 && input == '_' &&  (
 <Text fontSize='md'>Please enter a city</Text>
     ) }
 </VStack>


    </Container>

    {data?.cities?.cities.length > 0 && input.length >0 && (
   <CitySearchResults {...data} />
    )}

    {data?.cities?.cities.length === 0 && (
      <Container>No search results, please try another city</Container>
    )}
    {error && (
      <Container>We have encoutered an error </Container>
    )}
  </VStack>

)

}
