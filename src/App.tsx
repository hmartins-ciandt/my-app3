import "./App.css";
import DogDetails from "./DogDetails/DogDetails";
import CreateBeerForm from "./BeerForm/CreateBeerForm";
import CreateBeerFormikForm from "./BeerFormik/CreateBeerFormikForm";
import { Grid } from "@material-ui/core";
import DogList from "./DogList/DogList";

function App() {
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
            dogName={"red"}
            dogImage={
              "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
            }
            onBark={alertDisplay}
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
      <DogList></DogList>
    </div>
  );
}

const alertDisplay = () => {
  alert("Woof! Woof!");
};

export default App;
