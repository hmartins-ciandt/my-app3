import React from 'react';
import logo from './logo.svg';
import './App.css';
import DogDetails from './DogDetails/DogDetails';

function App() {  
  return (
      <div>
      <button onClick={(bark)=>{ alert('Alerta')}} >botão</button>
      <DogDetails dogName={'red'} dogImage={'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg'} />
      <DogDetails dogName={'rex'} dogImage={'https://www.dogstrust.org.uk/help-advice/_images/164742v800_puppy-1.jpg'} />
      </div>
  );
}

export default App;
