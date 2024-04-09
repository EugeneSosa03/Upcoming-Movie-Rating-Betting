import React from 'react'
import styled from 'styled-components'

import TitleBar from '@/components/TitleBar'
import Lobby from '@/pictures/CinemaLobby.jpg'


const ParentContainer = styled.div`
margin: 0vw;

width: 100%;
height: 50vw;

background-image: url(${Lobby.src});
background-repeat: no-repeat;
background-size: 100% 100%;
`

export default function index() {
  return (
    <ParentContainer>
        <TitleBar/>


        <TextContainer>
        <Text>Wallet Name</Text>
        <WonText>You Have won: </WonText>
        </TextContainer>

        <WinningsContainer>
            <WonText>Movie</WonText>
            <WonText>Predicted Rating</WonText>
            <WonText>Money Won</WonText>
        </WinningsContainer>

        </ParentContainer>
  )
}

const TextContainer = styled.div`
display: grid;
grid-template-column: 10vw;
justify-content: center;
background: rgba(255, 215, 0, 0.5);
`
const Text = styled.h1`
color: purple;
`

const WonText = styled.h1`
color: red;
`
const WinningsContainer = styled.div`

display: flex;


//align-items: center;
justify-content: space-between;
background: rgba(255, 0, 0, 0.5);
`
