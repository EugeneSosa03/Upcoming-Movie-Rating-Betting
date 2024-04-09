import {React, useEffect, useState}from 'react'
import styled from 'styled-components'
import axios from 'axios';

export default function MovieBar() {

  function createInitialList() {
    const initialUpcomingList = [];
    for (let i = 0; i < 1; i++){
      initialUpcomingList.push({
        id: i,
        text: "Hello"
      })
    }
    
    return initialUpcomingList
  }
  const [upcoming, setUpcoming] = useState(createInitialList());

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
        const UpComingMovies = await axios.request(options);
        console.log(UpComingMovies.data);
      
      } catch (error) {
        console.error(error);
      }
  }
  //MovieAPI();

  
  });

  return (
<Movies>Movies Go In Here. Will use dynamic routing once I get API to work</Movies> 
  )
}

const Movies = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 20vw;
    margin: 5vw;
    border: 0.1vw solid white;
    color: red;
`