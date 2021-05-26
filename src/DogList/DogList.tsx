import React, { useState } from "react";
import "../App.css";
import { map } from "lodash";
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
import fetchDogImage from "./FetchDogImage";
import Loader from "react-loader-spinner";

interface DogListProps {
  getDog: (dog: string) => void;
  getImg: (image: string) => void;
  count: number;
  getCount: (count: number) => void;
  newList: string;
}

function DogList(props: DogListProps) {
  const [list, setList] = useState({});
  const [dogBreed, setDogBreed] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getList = React.useCallback(async () => {
    const chamada = await fetchDogBreed();
    setList(chamada);
    setDogBreed("");
    setIsLoading(false);
  }, []);

  const getListImage = React.useCallback(async (dogBreedName: string) => {
    if (dogBreedName === "") {
      setImage("");
    } else {
      dogBreedName = dogBreedName.toLowerCase();
      const dogList = await fetchDogImage(dogBreedName);
      setImage(dogList[0]);
      props.getImg(dogList[0]);
    }
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      getList();
    }, 1000);

    if (dogBreed !== "") {
      getListImage(dogBreed);
    }
  }, []);

  React.useEffect(() => {
    if (dogBreed.charAt(0) === props.newList) {
      getListImage(dogBreed);
    } else {
      getListImage("");
    }
  }, [props.newList]);

  const allDogs: any = React.useMemo(() => {
    return Object.keys(list).map((dogName: string, index: number) => ({
      id: index + 1,
      name: dogName.substring(0, 1).toUpperCase().concat(dogName.substring(1)),
      scoldCount: 0,
    }));
  }, [list]);

  var dogs: any = React.useMemo(() => {
    let update = allDogs;
    if (dogs !== undefined) {
      update = updateAllDogs();
    }
    if (props.newList === "") {
      return update;
    } else {
      return returnNewDogList(props.newList, update);
    }
  }, [allDogs, props.newList]);

  function changeScoldCount(dogName: string) {
    for (let index = 0; index < allDogs.length; index++) {
      if (dogName === allDogs[index].name) {
        allDogs[index].scoldCount = props.count;
        return allDogs[index].scoldCount;
      }
    }
  }

  function getScoldCount(dogName: string) {
    for (let index = 0; index < allDogs.length; index++) {
      if (dogName === allDogs[index].name) {
        return allDogs[index].scoldCount;
      }
    }
  }

  function returnNewDogList(dogLetter: string, update: any) {
    let doglist = [];
    for (let index = 0; index < update.length; index++) {
      if (update[index].name.charAt(0) === dogLetter) {
        doglist.push(update[index]);
      }
    }

    return doglist;
  }

  function updateAllDogs() {
    const allDogsCopy = allDogs;
    for (let index = 0; index < allDogs.length; index++) {
      if (allDogs[index].name === dogs[index].name) {
        allDogsCopy[index] = dogs[index];
      }
    }
    return allDogsCopy;
  }

  function updateDogData(event: React.ChangeEvent<any>) {
    setIsLoading(true);
    setDogBreed(event.target.value);
    getListImage(event.target.value);
    props.getDog(event.target.value);
    changeScoldCount(dogBreed)!;
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
                  {dogs.map((dog: any) => (
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
