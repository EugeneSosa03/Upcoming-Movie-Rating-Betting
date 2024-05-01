import {React, useEffect, useState}from 'react'
import styled from 'styled-components'
import axios from 'axios';

export default function MovieBar() {

  const [upcoming, setUpcoming] = useState("");
  const [titles, setTitles] = useState("");
  const [poster, setPoster] = useState("");

  async function GetMoviesID() {
  
    //This first API gets 1 Upcoming Movie IMBD ID. 
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-coming-soon',
      params: {
        comingSoonType: 'MOVIE',
        first: '1'
      },
      headers: {
        'X-RapidAPI-Key': '61156e88a8mshfa79bb92b5ddf34p195e25jsnc13b1e151059',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };
    try {
      const upComingMovieID = await axios.request(options);

    
      upComingMovieID.data.data.comingSoon.edges.map((ID) => {setUpcoming(ID.node.id)});
      
      
      console.log({upcoming})

      
    
    
    } catch (error) {
      console.error(error);
    }
}
// uses ID from previous API to get the movies Information
async function GetMovies(id) {

  const options = {
    method: 'GET',
    url: 'https://mdblist.p.rapidapi.com/',
    params: {i: {id}},
    headers: {
      'X-RapidAPI-Key': '61156e88a8mshfa79bb92b5ddf34p195e25jsnc13b1e151059',
      'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    setTitles(response.title);
    setPoster(response.poster);

    console.log(titles);
    console.log(poster);

    
  } catch (error) {
    console.error(error);
  }
  
}


  useEffect(() => {

  

 GetMoviesID();
 //GetMovies(upcoming);


});


  return (
<MoviePlacement>Hello
</MoviePlacement> 
  )
}

const MoviePlacement = styled.div`
    display: grid;
    grid-template-row: 15vw;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 20vw;
    margin: 5vw;
    border: 0.1vw solid white;
    color: red;
`

const MoviesButton = styled.img`
width: 10vw;
heigth: 10vw;
`