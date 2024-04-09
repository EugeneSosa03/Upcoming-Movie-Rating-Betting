import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'




export default function TitleBar() {

const router = useRouter();

  function ToHome () {
    router.push('/');
  }

  return (
    

    <TitleContainer>

<Title onClick={ToHome}> Movie Rating Betting </Title>

    </TitleContainer>
    
  )
}


const TitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 7vw;
background-color: red;

`

const Title = styled.h1`
    color: #FFD700; 
    cursor: pointer;
    font-weight: 5000;
    font-size: 5vw;
    

`
