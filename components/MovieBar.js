import {React, useEffect, useState}from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'

import MoviePoster from '@/pictures/KingdomofthePlanetofTheApes.jpg'



const ParentContainer = styled.div`
  display: grid;
  justify-content: center;
`

export default function MovieBar() {

  const router = useRouter();

  return (
    <ParentContainer>
      <MoviePlacement onClick={() => {router.push("/RatingPage")}}></MoviePlacement> 
      <h1>Please Click Poster to go to Rating Page!</h1>
    </ParentContainer>
  )
}

const MoviePlacement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 40vw;
    margin: 5vw;
    border: 0.1vw solid white;
    background-image: url(${MoviePoster.src});
    background-size: 40vw;
    cursor: pointer;
`


