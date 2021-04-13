import React, { useState } from 'react';
import '../App.css';

function CreateBeerForm() { 
const [beerName, setName] = useState("");
const [beerType, setType] = useState("");
const [hasCorn, setCorn] = useState(false);
const [ingredients, setIng] = useState("");
return (
<div className="divForm" >
<form>
<label>
Beer Name:  
<input type="text" name="beer" onChange={e =>setName(e.target.value)} ></input>
</label>
<br/>
<label>
Type of Beer:  
<select  onChange={e =>setType(e.target.value)}  >
  <option value="" >Selecione</option>
  <option value="ale">Ale</option>
  <option value="lager">Lager</option>
  <option value="stout">Stout</option>
</select>
</label>
<br/>
<label >
Has Corn:  
<input type="checkbox" name="corn" onChange={() =>setCorn(!hasCorn)} ></input>
</label>
<br/>
<label>
Ingredients: 
<textarea onChange={e =>setIng(e.target.value)} ></textarea>
</label>
<br/>
</form>
<button onClick={() => console.log(`beer name: ${beerName}\ntype of beer: ${beerType}\nhas corn: ${hasCorn}\ningredients: ${ingredients}`) } >Submit</button>


</div>
);
}

export default CreateBeerForm;