import React from 'react';
import './App.css';
import DogDetails from './DogDetails/DogDetails';
import CreateBeerForm from './BeerForm/CreateBeerForm';

function App() { 
return (
<div>
<button onClick={(bark)=>{ alert('alerta')}} >botão</button>
<DogDetails dogName={'red'} 
dogImage={'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg'} 
onBark = {alertDisplay} />
<CreateBeerForm/>
</div>
);
}

const alertDisplay = () => {
alert('Woof! Woof!');
}

export default App;