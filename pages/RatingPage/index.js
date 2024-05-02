import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

const ParentContainer = styled.div`
display: grid;
grid-template-columns: 10vw 10vw;
justify-content: center;
height: 10vw;
width: 90vw;

`

export default function index() {
  return (
    <>

    <Head>
      <title>Rating Page</title>
    </Head>
    <ParentContainer>

    <div>Amount Betting</div>
    <div>Rating</div>
    
    <InformationBar/>
    <InformationBar/>
    </ParentContainer>
    </>
    
    
  )
}

const InformationBar = styled.input`

width: 20vw;
height: 1vw;

`

