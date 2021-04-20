import React, { useState } from "react";
import "../App.css";

function CreateBeerForm() {
  const [beerName, setName] = useState("");
  const [beerType, setType] = useState("");
  const [hasCorn, setCorn] = useState(false);
  const [ingredients, setIng] = useState("");
  const disableValid = () => {
    if (
      validateform(beerName) &&
      validateform(beerType) &&
      validateform(ingredients)
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="divForm">
      <form>
        <label>
          Beer Name:
          <input
            type="text"
            name="beer"
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </label>
        <br />
        <label>
          Type of Beer:
          <select onChange={(e) => setType(e.target.value)} required>
            <option value="">Selecione</option>
            <option value="ale">Ale</option>
            <option value="lager">Lager</option>
            <option value="stout">Stout</option>
          </select>
        </label>
        <br />
        <label>
          Has Corn:
          <input
            type="checkbox"
            name="corn"
            onChange={() => setCorn(!hasCorn)}
            required
          ></input>
        </label>
        <br />
        <label>
          Ingredients:
          <textarea
            onChange={(e) => setIng(e.target.value)}
            required
          ></textarea>
        </label>
        <br />
      </form>

      <button
        onClick={() =>
          console.log(
            `beer name: ${beerName}\ntype of beer: ${beerType}\nhas corn: ${hasCorn}\ningredients: ${ingredients}`
          )
        }
        disabled={!disableValid()}
      >
        Submit
      </button>
    </div>
  );
}

const validateform = (x: any) => {
  if (x == "") {
    return false;
  } else {
    return true;
  }
};

export default CreateBeerForm;
