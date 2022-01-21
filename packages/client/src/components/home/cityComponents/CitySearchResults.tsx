import React , { useState,useEffect } from 'react'
import type { FC } from 'react'
import {  VStack,SimpleGrid } from '@chakra-ui/react'
import { City } from '../../../generated/graphql'
import { QueryFindCityQuery } from '../../../generated/graphql'
import CityItem from './CityItem'

export const CitySearchResults: FC<QueryFindCity> = (props:QueryFindCity) => {







    return (

  <VStack spacing="8">


<SimpleGrid columns={2} spacing={10}>
{props.cities.cities.map((city) =>
    <CityItem key={city.id} {...city}/>
)}
</SimpleGrid>

  </VStack>


    )
  }

  export default CitySearchResults;
