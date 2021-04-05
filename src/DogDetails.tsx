import React from 'react';
import logo from './logo.svg';
import './App.css';
import { request } from 'http';

function DogDetails() {  
  return (
    <div>
         <img className='dogImage' src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"></img>
         <h5>Rex</h5>
         <button>Bark</button> 
    </div>
  );
}

export default DogDetails;
