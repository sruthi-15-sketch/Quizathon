import { Toast } from 'bootstrap';
import React, { Component, useEffect, useState } from 'react'
import PaginationComponent from './PaginationComponent';

function Score(total){
    const[data,setData]=useState(0);
    useEffect(() => {
        fetch("http://localhost:8090/api/auth/display_score/3")
          .then((response) => response.json())
          .then((json) => setData(json));
      }, []);
    
    return (
        <div>
        
        <h1>Score={data.score}</h1>
        </div>
    )
}

export default Score;

//  <img src="https://media0.giphy.com/media/4EF55kelvzyMWhNTrA/200w.gif?cid=82a1493bb1rsoaid2bu3cj57bomni4dipj0apyo2ivf7sr5l&rid=200w.gif&ct=ts" alt="final_score"/>