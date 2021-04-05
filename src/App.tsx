import React from 'react';
import logo from './logo.svg';
import './App.css';
import DogDetails from './DogDetails';

function App() {  
  return (
      <div>
      <button onClick={(bark)=>{ alert('Alerta')}} >botão</button>
      <DogDetails/>
      </div>
  );
}

export default App;
