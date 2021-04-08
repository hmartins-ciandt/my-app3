import React from 'react';
import logo from './logo.svg';
import '../App.css';
import { request } from 'http';

function DogDetails({dogName, dogImage, onBark}:any) { 
console.log(onBark);
return (
<div>
<img className='dogImage' src={dogImage}></img>
<h5>{dogName}</h5>
<button onClick={() => onBark()}>Bark</button> 
</div>
);
}

export default DogDetails;