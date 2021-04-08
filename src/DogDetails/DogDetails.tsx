import React from 'react';
import logo from './logo.svg';
import { request } from 'http';


function DogDetails(props:any) {  
  
  return (
    
    <div>
         <img className='dogImage' src={props.dogImage}></img>
         <h5>{props.dogName}</h5>
         <button onClick={(bark)=>{ alert('Alerta')}}>Bark</button> 
    </div>
  );
}

export default DogDetails;
