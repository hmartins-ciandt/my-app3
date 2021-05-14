import React, { useEffect, useState, useCallback, useMemo } from "react";
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

interface dogListProps {
  getDog: (dog: string) => void;
  getImg: (image: string) => void;
  count: number;
  getCount: (count: number) => void;
}

function DogList(props: dogListProps) {
  const [list, setList] = useState([]);
  const [dogBreed, setDogBreed] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dogScold, setDogScold] = useState(0);

  const getList = async () => {
    console.log("estou no callback");
    const chamada = await fetchDogBreed();
    console.log("chamada - " + chamada);
    //setList(chamada);
    setIsLoading(false);
  };

  const getListImage = useCallback(async (dogBreedName: string) => {
    dogBreedName = dogBreedName.toLowerCase();

    const dogList = await api.default(dogBreedName);
    setImage(dogList[0]);
    props.getImg(dogList[0]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log("estou no useEffect");
    getList();
  }, [getList]);

  const dogs = useMemo(() => {
    console.log("list dogs - " + list);
    return map(keys(list), capitalize).join("\n").split("\n");
  }, [list]);

  const allDogs = useMemo(() => {
    console.log("list allDogs - " + list);
    return Object.keys(list).map((dogName: string, index: number) => ({
      id: index + 1,
      name: dogName.substring(0, 1).toUpperCase().concat(dogName.substring(1)),
      scoldCount: 0,
    }));
  }, [list]);

  function changeScoldCount(dogName: string) {
    if (dogName === "") {
      return 0;
    }

    for (let index = 0; index < dogs.length; index++) {
      if (dogName === allDogs[index].name) {
        allDogs[index].scoldCount = props.count;
        return allDogs[index].scoldCount;
      }
    }
  }

  function getScoldCount(dogName: string) {
    if (dogName === "") {
      return 0;
    }
    console.log("Dogs - " + dogs);
    console.log("All Dogs - " + allDogs);
    for (let index = 0; index < dogs.length; index++) {
      if (dogName === allDogs[index].name) {
        return allDogs[index].scoldCount;
      }
    }
  }

  function updateDogData(event: React.ChangeEvent<any>) {
    setIsLoading(true);
    setDogBreed(event.target.value);
    getListImage(event.target.value);
    props.getDog(event.target.value);
    setDogScold(changeScoldCount(dogBreed)!);
    props.getCount(getScoldCount(event.target.value)!);
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Grid item xs={1}>
            <FormControl>
              <div>
                <InputLabel id="dogList">DogList</InputLabel>
                <Select
                  name="dogSelect"
                  value={dogBreed}
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateDogData(e);
                  }}
                >
                  {allDogs.map((dog) => (
                    <MenuItem key={dog.name} value={dog.name}>
                      {dog.name}
                    </MenuItem>
                  ))}
                </Select>
                {isLoading ? (
                  <Loader type="ThreeDots" color="#00BFFF" />
                ) : (
                  <img className="dogImage" src={image} alt="" />
                )}
              </div>
              {image === "" ? (
                <h5>Choose a dog</h5>
              ) : (
                <h5>
                  You scolded {dogBreed} {props.count} times{" "}
                </h5>
              )}
            </FormControl>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default DogList;
