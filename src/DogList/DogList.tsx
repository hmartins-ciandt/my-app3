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
import Loader from "react-loader-spinner";
import { createTrue } from "typescript";

function DogList() {
  const [list, setList] = useState([]);
  const [dogBreed, setDogBreed] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getList();
    }, 1000);

    if (dogBreed !== "") {
      getListImage(dogBreed);
    }
  }, []);

  const getList = useCallback(async () => {
    setList(await fetchDogBreed());
    setIsLoading(false);
  }, []);

  const dogs = map(keys(list), capitalize).join("\n").split("\n");

  const getListImage = useCallback(async (dogBreedName: any) => {
    dogBreedName = dogBreedName.toLowerCase();
    const dogList = await api.default(dogBreedName);
    setImage(dogList[0]);
    setIsLoading(false);
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
                    setIsLoading(true);
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
                {isLoading ? (
                  <Loader type="ThreeDots" color="#00BFFF" />
                ) : (
                  <img className="dogImage" src={image} alt="" />
                )}
              </div>
            </FormControl>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default DogList;
