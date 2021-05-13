import "./App.css";
import DogDetails from "./DogDetails/DogDetails";
import CreateBeerForm from "./BeerForm/CreateBeerForm";
import CreateBeerFormikForm from "./BeerFormik/CreateBeerFormikForm";
import { Grid } from "@material-ui/core";
import DogList from "./DogList/DogList";
import { useState } from "react";

function App() {
  const [dogBreed, setDogBreed] = useState("red");
  const [image, setImage] = useState(
    "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
  );
  const [scold, setScold] = useState(0);
  const [count, setCount] = useState(0);

  const handleCount = (number: number) => {
    setCount(number);
  };

  const handleScold = (number: number) => {
    setScold(number);
  };
  return (
    <div>
      <button
        onClick={(bark) => {
          alert("alerta");
        }}
      >
        botão
      </button>
      <Grid container spacing={3} justify="center">
        <Grid item xs={3}>
          <DogDetails
            dogName={dogBreed}
            dogImage={image}
            onBark={alertDisplay}
            count={count}
            getCount={handleCount}
          />
        </Grid>
        <Grid container spacing={3} justify="center">
          <Grid item xs={5} className="grid">
            <CreateBeerForm />
          </Grid>
          <Grid item xs={5} className="grid">
            <CreateBeerFormikForm />
          </Grid>
        </Grid>
      </Grid>
      <DogList
        getDog={(dogBreed: string) => setDogBreed(dogBreed)}
        getImg={(image: string) => setImage(image)}
        count={count}
        getCount={handleCount}
      />
    </div>
  );
}

const alertDisplay = () => {
  alert("Woof! Woof!");
};

export default App;
