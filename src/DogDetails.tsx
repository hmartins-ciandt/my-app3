import React from 'react';
import logo from './logo.svg';
import './App.css';
import { request } from 'http';


function DogDetails(props:any) {  
  
  return (
    
    <div>
         <img className='dogImage' src={props.dogImage}></img>
         <h5>{props.dogName}</h5>
         <button>Bark</button> 
    </div>
  );
}

export default DogDetails;
