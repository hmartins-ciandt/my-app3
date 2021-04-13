import React, { useState } from 'react';
import logo from './logo.svg';
import '../App.css';
import { request } from 'http';

function DogDetails({dogName, dogImage, onBark}:any) { 
const [count, setCount] = useState(0);
return (
<div>
<img className='dogImage' src={dogImage}></img>
<h5>{dogName}</h5>
<button onClick={() => onBark()}>Bark</button> 
<button onClick={() => setCount(count+1)}>Scold</button>
<h5>You scolded {dogName} {count} times </h5>
</div>
);
}

export default DogDetails;