import React from 'react'
import styled from 'styled-components'

import TitleBar from '@/components/TitleBar'
import TicketBooth from '@/pictures/TicketBooth.webp'


const ParentContainer = styled.div`
margin: 0vw;

width: 100%;
height: 50vw;

background-image: url(${TicketBooth.src});
background-repeat: no-repeat;
background-size: 100% 100%;
`

const Container = styled.div`

display: grid;
grid-template-column: 10vw;
grid-template-row: 10vw;
width: 30vw;
justify-content: center;
//align-items: center;
margin-left: 35vw;
margin-top: 10vw;


background: rgba(255, 215, 0, 0.5);

`



export default function index() {
  return (

   <ParentContainer>
    <TitleBar/>

    <Container>
        <Text>Wallet</Text>
        <InformationBar type='text'></InformationBar>
        <Text>Password</Text>
        <InformationBar type='password'></InformationBar>
    </Container>

   </ParentContainer>
      
    
    
  )
}

const InformationBar = styled.div`
width: 10vw;
height: 2vw;
background-color: white;
`

const Text = styled.h1`
color: black;
`