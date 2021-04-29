import React, { useEffect, useState, useCallback } from "react";
import "../App.css";
import { map } from "lodash";
import { keys } from "lodash";
import { capitalize } from "lodash";
import fetchDogBreed from "./FetchDogBreed";
import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

function DogList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = useCallback(async () => {
    setList(await fetchDogBreed());
  }, []);
  const dogs = map(keys(list), capitalize).join("\n").split("\n");
  const [dogBreed, setDogBreed] = useState("");

  return (
    <div>
      <Card>
        <CardContent>
          <Grid item xs={1}>
            <FormControl style={{ minWidth: 120 }}>
              <InputLabel id="dogList">DogList</InputLabel>
              <Select
                name="dogSelect"
                value={dogBreed}
                onChange={(e: any) => {
                  setDogBreed(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {dogs.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default DogList;
