import {useState, useRef, useContext, createContext, useEffect} from 'react';
import {useRouter} from 'next/navigation'; 
import styled from 'styled-components';
import TitleBar from '@/components/TitleBar';


const ParentContainer = styled.div`

`

export default function index() {

  const router = useRouter();

 

  const WalletRef = useRef(null);
  const passwordRef = useRef(null);



  return (
    <ParentContainer>
        <TitleBar/>
    <h1>Wallet</h1>
    <InformationBar ref={WalletRef} type="text"></InformationBar>
    
    <h1>Password</h1>
    <InformationBar ref={passwordRef} type="password"></InformationBar>
    
    <button>Login</button>
    
    
    </ParentContainer>
  )
}

const InformationBar = styled.input`
width: 10vw;
height: 2vw;
`
