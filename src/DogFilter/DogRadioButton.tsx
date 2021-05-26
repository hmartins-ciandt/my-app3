import { FormControlLabel, Radio } from "@material-ui/core";
import React, { useState } from "react";
import fetchDogBreed from "../DogList/FetchDogBreed";
import { map, keys, capitalize } from "lodash";

interface DogRadioButtonProps {
  getDogListLetter: (letter: string) => void;
  dogLetter: string;
}

function DogRadioButton(props: DogRadioButtonProps) {
  const [list, setList] = useState({});

  const getList = React.useCallback(async () => {
    const chamada = await fetchDogBreed();
    setList(chamada);
  }, []);

  React.useEffect(() => {
    getList();
  }, []);

  const dogs = React.useMemo(() => {
    return map(keys(list), capitalize).join("\n").split("\n");
  }, [list]);

  function findDogNumberByFirstLetter(dogLetter: string) {
    let dogNumber = 0;
    for (let index = 0; index < dogs.length; index++) {
      if (dogs[index].charAt(0) === dogLetter) {
        dogNumber++;
      }
    }
    return dogNumber;
  }

  function returnNewDogList(dogLetter: string) {
    let doglist = [];
    for (let index = 0; index < dogs.length; index++) {
      if (dogs[index].charAt(0) === dogLetter) {
        doglist.push(dogs[index]);
      }
    }
    return Object.assign({}, doglist);
  }

  function checkDisabled(letter: string) {
    if (findDogNumberByFirstLetter(letter) === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <FormControlLabel
        value={props.dogLetter}
        control={
          <Radio
            disabled={checkDisabled(props.dogLetter)}
            onClick={() => {
              props.getDogListLetter(props.dogLetter);
            }}
          />
        }
        label={`${props.dogLetter} ${findDogNumberByFirstLetter(
          props.dogLetter
        )}`}
        className="formControlLabel"
      />
      {props.dogLetter === "Z" ? (
        <FormControlLabel
          value="All"
          control={
            <Radio
              onClick={() => {
                props.getDogListLetter("");
              }}
            />
          }
          label="All Dogs"
          className="formControlLabel"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default DogRadioButton;
