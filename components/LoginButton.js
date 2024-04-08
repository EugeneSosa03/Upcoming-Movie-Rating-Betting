import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'



export default function LoginButton() {

const router = useRouter();

function ToLogIn () {
  router.push('/LogIn');
}
  return (
    <LogInButton onClick={ToLogIn}>Login</LogInButton>
  )
}

const LogInButton = styled.div`
display: flex;
justify-content: center;

float: right;
cursor: pointer;
border: 0;
border-radius: 4px;
font-weight: 600;
margin: 10px;
width: 200px;
padding: 10px 0;
box-shadow: 0 0 20px #FFD700;
transition: 0.4s;
background-color: red;


&:hover{
  color: red;
  width:;
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
  background-color: #FFD700;
}

`