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

<Title onClick={ToHome}> Movie Theater </Title>

    </TitleContainer>
    
  )
}


const TitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

background-color: red;

`

const Title = styled.h1`
    color: #FFD700; 
  cursor: pointer;
`