import React from 'react'




const ParentContainer = styled.div`
display: grid;
grid-template-row: 20vw 20vw;
justify-content: center;

`

export default function index() {
  return (
    <ParentContainer>


    <p>Betting Amount</p>   
    <p> </p>
    <InformationBar></InformationBar>

    </ParentContainer>
    
  )
}

const InformationBar = styled.input`
width: 20vw;
height: 20vw;
`