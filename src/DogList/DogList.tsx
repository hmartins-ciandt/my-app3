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

  const dogs = useMemo(() => {
    return map(keys(list), capitalize).join("\n").split("\n");
  }, [list]);

  const allDogs = useMemo(() => {
    return Object.keys(list).map((dogName: string, index: number) => ({
      id: index + 1,
      name: dogName.substring(0, 1).toUpperCase().concat(dogName.substring(1)),
      scoldCount: 0,
    }));
  }, [list]);

  const getListImage = useCallback(async (dogBreedName: string) => {
    dogBreedName = dogBreedName.toLowerCase();

    const dogList = await api.default(dogBreedName);
    setImage(dogList[0]);
    props.getImg(dogList[0]);
    setIsLoading(false);
  }, []);
  //tenho que mudar o scoldcout sem mudar o scoldcount de outro dog
  function setScoldCount(dogName: string) {
    console.log(dogName);
    for (let index = 0; index < dogs.length; index++) {
      if (dogName === allDogs[index].name) {
        console.log("if acho dog" + props.count);
        if (allDogs[index].scoldCount > props.count) {
          console.log("scold>props" + props.count);
          return allDogs[index].scoldCount;
        }
        if (allDogs[index].scoldCount === 0) {
          console.log("scold=0" + props.count);

          if (props.count > 0) {
            console.log("scold>0" + props.count);
            console.log(props.count);
            return allDogs[index].scoldCount;
          }
          console.log("scold<=0" + props.count);

          allDogs[index].scoldCount = props.count;
          return allDogs[index].scoldCount;
        } else {
          console.log("scold!=0" + props.count);

          return allDogs[index].scoldCount;
        }
      }
    }
  }

  function updateDogData(event: React.ChangeEvent<any>) {
    setIsLoading(true);
    setDogBreed(event.target.value);
    getListImage(event.target.value);
    props.getDog(event.target.value);
    props.getCount(setScoldCount(event.target.value)!);
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
              You scolded {dogBreed} {props.count} times{" "}
            </FormControl>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default DogList;
