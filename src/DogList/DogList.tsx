import React, { useEffect, useState, useCallback } from "react";
import "../App.css";
import { map, keys, capitalize } from "lodash";
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
import * as api from "./FetchDogImage";

function DogList() {
  const [list, setList] = useState([]);
  const [dogBreed, setDogBreed] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getList();
    if (dogBreed !== "") {
      getListImage(dogBreed);
    }
  }, []);

  const getList = useCallback(async () => {
    setList(await fetchDogBreed());
  }, []);

  const dogs = map(keys(list), capitalize).join("\n").split("\n");

  const getListImage = useCallback(async (dogBreedName: any) => {
    dogBreedName = dogBreedName.toLowerCase();
    const dogList = await api.default(dogBreedName);
    setImage(dogList[0]);
  }, []);
  return (
    <div>
      <Card>
        <CardContent>
          <Grid item xs={1}>
            <FormControl>
              <div>
                <InputLabel id="dogList">DogList</InputLabel>
                <Select
                  style={{ minWidth: 120 }}
                  name="dogSelect"
                  value={dogBreed}
                  onChange={(e: any) => {
                    setDogBreed(e.target.value);
                    getListImage(e.target.value);
                  }}
                >
                  {dogs.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>

                <img className="dogImage" src={image} alt="" />
              </div>
            </FormControl>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default DogList;
