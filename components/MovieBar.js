import {React, useEffect, useState}from 'react'
import styled from 'styled-components'
import axios from 'axios';

export default function MovieBar() {

 

  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {

  async function GetMoviesID() {
  
    //This first API gets Upcoming Movies IMBD ID. 
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

      const List = [];

      UpComingMovies.data.data.comingSoon.edges.map((MovieID) => {List.push(MovieID.node.id)});
      
      setUpcoming(List);
    
    
    } catch (error) {
      console.error(error);
    }
}
// uses ID from previous API to get the movies Information
async function getMovies(id) {

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
    console.log(response.data);

    
  } catch (error) {
    console.error(error);
  }
  
}







 // GetMoviesID();






});
  return (
<Movies> Movies Go In Here. Will use dynamic routing once I get API to work 
</Movies> 
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