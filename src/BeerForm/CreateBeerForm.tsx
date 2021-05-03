import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
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
    <div>
      <Card>
        <CardContent>
          <FormControl>
            <TextField
              type="text"
              name="beerName"
              id="beerName"
              label="Beer Name"
              onChange={(e) => setName(e.target.value)}
              required
            ></TextField>

            <label>
              Type of Beer:
              <Select
                style={{ minWidth: 120 }}
                name="beerType"
                id="beerType"
                value={beerType}
                onChange={(e: any) => setType(e.target.value)}
                required
              >
                <MenuItem value={""}>Selecione</MenuItem>
                <MenuItem value={"ale"}>Ale</MenuItem>
                <MenuItem value={"lager"}>Lager</MenuItem>
                <MenuItem value={"stout"}>Stout</MenuItem>
              </Select>
            </label>

            <FormControlLabel
              label="Has Corn:"
              control={
                <Checkbox
                  name="hasCorn"
                  id="hasCorn"
                  onChange={() => setCorn(!hasCorn)}
                  required
                />
              }
            />

            <TextField
              name="ingredients"
              id="ingredients"
              label="ingredients"
              onChange={(e) => setIng(e.target.value)}
              required
            ></TextField>

            <Button
              name="botao"
              id="botao"
              color="primary"
              variant="contained"
              onClick={() =>
                console.log(
                  `beer name: ${beerName}\ntype of beer: ${beerType}\nhas corn: ${hasCorn}\ningredients: ${ingredients}`
                )
              }
              disabled={!disableValid()}
            >
              Submit
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

const validateform = (x: any) => {
  if (x === "") {
    return false;
  } else {
    return true;
  }
};

export default CreateBeerForm;
