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
  Scold: number;
  getScold: (count: number) => void;
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

  const dogScold = useMemo(() => {
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

  function getScolded(dogName: string) {
    for (let index = 0; index < dogs.length; index++) {
      if (dogName === dogScold[index].name) {
        if (dogScold[index].scoldCount === 0) {
          return dogScold[index].scoldCount;
        } else {
          return props.Scold;
        }
      }
    }
  }

  function setScolded(dogName: string) {
    for (let index = 0; index < dogs.length; index++) {
      if (dogName === dogScold[index].name) {
        dogScold[index].scoldCount = props.Scold;
        return dogScold[index].scoldCount;
      }
    }
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
                    setIsLoading(true);
                    setDogBreed(e.target.value);
                    getListImage(e.target.value);
                    props.getDog(e.target.value);
                    props.getScold(setScolded(e.target.value)!);
                    props.getScold(getScolded(e.target.value)!);
                  }}
                >
                  {dogScold.map((dog) => (
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
              You scolded {dogBreed} {props.Scold} times{" "}
            </FormControl>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default DogList;
