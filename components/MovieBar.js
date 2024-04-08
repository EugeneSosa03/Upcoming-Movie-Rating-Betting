import React from 'react'
import styled from 'styled-components'

export default function MovieBar() {
  return (
<Movies>Movies Go In Here</Movies> 
  )
}


const Movies = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 20vw;
    margin: 5vw;
    border: 0.1vw solid black;
`