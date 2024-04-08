import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import MovieBar from "@/components/MovieBar";
import TitleBar from "@/components/TitleBar";
import LoginButton from "@/components/LoginButton";

import RedCarpet from "@/public/RedCarpetBackground.jpg";

import { useEffect } from "react";

import axios from 'axios';

const ParentContainer = styled.div`
margin: 0vw;
padding: 0vw;

backgroundImage: 'url(${RedCarpet.src})';
`


export default function Home() {
  
useEffect(() => {
  async function MovieAPI() {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-coming-soon',
      params: {
        comingSoonType: 'MOVIE',
        first: '20'
      },
      headers: {
        'X-RapidAPI-Key': '61156e88a8mshfa79bb92b5ddf34p195e25jsnc13b1e151059',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

}
//MovieAPI();
console.log("Hello");
});


  return (
    <>
      <Head>
        <title>BESTEST WEBSITE EVER</title>
      </Head>
      <ParentContainer>
      
      <TitleBar/>
      <LoginButton/>
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

      