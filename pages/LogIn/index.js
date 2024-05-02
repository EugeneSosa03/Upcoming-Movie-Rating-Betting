import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import TitleBar from '@/components/TitleBar'
import TicketBooth from '@/pictures/TicketBooth.webp'


import { ConnectEmbed, useDisconnect } from "@thirdweb-dev/react";


const ParentContainer = styled.div`
display: flex;
justify-content: center;
margin: 0vw;
width: 100%;
height: 50vw;

background-image: url(${TicketBooth.src});
background-repeat: no-repeat;
background-size: 100% 100%;
`

export default function index() {

 const disconnect = useDisconnect();
  return (
<>

<ParentContainer>
      <Head>
        <title>Login</title>
      </Head>
      <button onClick={disconnect}>Disconnect</button>
    <ConnectEmbed/>
    

   </ParentContainer>
      
</>
   
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