import React, { useState } from "react";
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
import fetchDogImage from "./FetchDogImage";
import Loader from "react-loader-spinner";

interface DogListProps {
  getDog: (dog: string) => void;
  getImg: (image: string) => void;
  count: number;
  getCount: (count: number) => void;
  newList:{}
  
}

function DogList(props: DogListProps) {
  const [fetchList, setFetchList] = useState({});

  const [list, setList] = useState({});
  const [dogBreed, setDogBreed] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getList = React.useCallback(async () => {
    const chamada = await fetchDogBreed();    
    setFetchList(chamada);    
     
      setIsLoading(false);
  }, []);

  const getListImage = React.useCallback(async (dogBreedName: string) => {
    dogBreedName = dogBreedName.toLowerCase();

    const dogList = await fetchDogImage(dogBreedName);
    setImage(dogList);
    props.getImg(dogList);
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    getList();
    setList(  props.newList);
    //console.log(list)
    //console.log(props.newList)
    console.log(dogBreed)
    setDogBreed("");
    console.log(dogBreed)

    setImage("");
    props.getImg(""); 

    if (dogBreed !== "") {
      getListImage(dogBreed);
    }
  }, [props.newList]);


  const allDogs = React.useMemo(() => {
    
    if(Object.keys(list).length === 0 && list.constructor === Object){
    return Object.keys(fetchList).map((dogName: string, index: number) => ({
      id: index + 1,
      name: dogName.substring(0, 1).toUpperCase().concat(dogName.substring(1)),
      scoldCount: 0,
    }));
  }else{
    return Object.values(list).map((dogName: any, index: number) => ({
      id: index + 1,
      name: dogName.substring(0, 1).toUpperCase().concat(dogName.substring(1)),
      scoldCount: 0,
      }));
  }
  }, [fetchList, list]);

  function changeScoldCount(dogName: string) {
    console.log(allDogs)
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
