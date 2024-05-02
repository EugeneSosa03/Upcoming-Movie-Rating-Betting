import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import MovieBar from "@/components/MovieBar";
import TitleBar from "@/components/TitleBar";
import ProfileLoginBar from "@/components/ProfileLoginBar";

import RedCarpet from "@/pictures/RedCarpetBackground.jpg";

import { useEffect } from "react";


const ParentContainer = styled.div`
margin: 0vw;
padding: 0vw;
width: 100%;
height: 100vw;
background-image: url(${RedCarpet.src});
background-repeat: no-repeat;
background-size: 100% 100%;
`

export default function Home() {

  return (
    <>
      <Head>
        <title>UpComing Movie Rating Better</title>
      </Head>
      
      <ParentContainer>
      
      <ProfileLoginBar/>
      <MovieBar/>

      </ParentContainer>
      
      </>
      )
      }

      const Box = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;


      width: 100vw;
      height: 20vw;
      margin: 0vw;   
      
      `

      