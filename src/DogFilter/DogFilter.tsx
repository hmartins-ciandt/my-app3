import {  FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import fetchDogBreed from "../DogList/FetchDogBreed";
import { map, keys, capitalize } from "lodash";



function DogFilter(props:any) {
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
          doglist.push(dogs[index])
      }
    }
    return Object.assign({}, doglist);
  }

  function checkDisabled(letter: string){
    if(findDogNumberByFirstLetter(letter) === 0){
      return true;
    }else{
      return false;
    }
  }

  return (
    <div>
        <FormLabel>Dog Filter</FormLabel>
        <RadioGroup row>
            <FormControlLabel value="A" control={<Radio disabled={checkDisabled("A")} onClick={()=>{props.getNewList(returnNewDogList("A"))}}/>} label={`A ${findDogNumberByFirstLetter("A")}` } className="formControlLabel" />
            <FormControlLabel value="B" control={<Radio disabled={checkDisabled("B")} onClick={()=>{props.getNewList(returnNewDogList("B"))}}/>} label={`B ${findDogNumberByFirstLetter("B")}`}  className="formControlLabel" />
            <FormControlLabel value="C" control={<Radio disabled={checkDisabled("C")} onClick={()=>{props.getNewList(returnNewDogList("C"))}}/>} label={`C ${findDogNumberByFirstLetter("C")}`}  className="formControlLabel" />
            <FormControlLabel value="D" control={<Radio disabled={checkDisabled("D")} onClick={()=>{props.getNewList(returnNewDogList("D"))}}/>} label={`D ${findDogNumberByFirstLetter("D")}`}  className="formControlLabel" />
            <FormControlLabel value="E" control={<Radio disabled={checkDisabled("E")} onClick={()=>{props.getNewList(returnNewDogList("E"))}}/>} label={`E ${findDogNumberByFirstLetter("E")}`}  className="formControlLabel" />
            <FormControlLabel value="F" control={<Radio disabled={checkDisabled("F")} onClick={()=>{props.getNewList(returnNewDogList("F"))}}/>} label={`F ${findDogNumberByFirstLetter("F")}`}  className="formControlLabel" />
            <FormControlLabel value="G" control={<Radio disabled={checkDisabled("G")} onClick={()=>{props.getNewList(returnNewDogList("G"))}}/>} label={`G ${findDogNumberByFirstLetter("G")}`}  className="formControlLabel" />
            <FormControlLabel value="H" control={<Radio disabled={checkDisabled("H")} onClick={()=>{props.getNewList(returnNewDogList("H"))}}/>} label={`H ${findDogNumberByFirstLetter("H")}`}  className="formControlLabel" />
            <FormControlLabel value="I" control={<Radio disabled={checkDisabled("I")} onClick={()=>{props.getNewList(returnNewDogList("I"))}}/>} label={`I ${findDogNumberByFirstLetter("I")}`}  className="formControlLabel" />
            <FormControlLabel value="J" control={<Radio disabled={checkDisabled("J")} onClick={()=>{props.getNewList(returnNewDogList("J"))}}/>} label={`J ${findDogNumberByFirstLetter("J")}`}  className="formControlLabel" />
            <FormControlLabel value="K" control={<Radio disabled={checkDisabled("K")} onClick={()=>{props.getNewList(returnNewDogList("K"))}}/>} label={`K ${findDogNumberByFirstLetter("K")}`}  className="formControlLabel" />
            <FormControlLabel value="L" control={<Radio disabled={checkDisabled("L")} onClick={()=>{props.getNewList(returnNewDogList("L"))}}/>} label={`L ${findDogNumberByFirstLetter("L")}`}  className="formControlLabel" />
            <FormControlLabel value="M" control={<Radio disabled={checkDisabled("M")} onClick={()=>{props.getNewList(returnNewDogList("M"))}}/>} label={`M ${findDogNumberByFirstLetter("M")}`}  className="formControlLabel" />
            <FormControlLabel value="N" control={<Radio disabled={checkDisabled("N")} onClick={()=>{props.getNewList(returnNewDogList("N"))}}/>} label={`N ${findDogNumberByFirstLetter("N")}`}  className="formControlLabel" />
            <FormControlLabel value="O" control={<Radio disabled={checkDisabled("O")} onClick={()=>{props.getNewList(returnNewDogList("O"))}}/>} label={`O ${findDogNumberByFirstLetter("O")}`}  className="formControlLabel" />
            <FormControlLabel value="P" control={<Radio disabled={checkDisabled("P")} onClick={()=>{props.getNewList(returnNewDogList("P"))}}/>} label={`P ${findDogNumberByFirstLetter("P")}`}  className="formControlLabel" />
            <FormControlLabel value="Q" control={<Radio disabled={checkDisabled("Q")} onClick={()=>{props.getNewList(returnNewDogList("Q"))}}/>} label={`Q ${findDogNumberByFirstLetter("Q")}`}  className="formControlLabel" />
            <FormControlLabel value="R" control={<Radio disabled={checkDisabled("R")} onClick={()=>{props.getNewList(returnNewDogList("R"))}}/>} label={`R ${findDogNumberByFirstLetter("R")}`}  className="formControlLabel" />
            <FormControlLabel value="S" control={<Radio disabled={checkDisabled("S")} onClick={()=>{props.getNewList(returnNewDogList("S"))}}/>} label={`S ${findDogNumberByFirstLetter("S")}`}  className="formControlLabel" />
            <FormControlLabel value="T" control={<Radio disabled={checkDisabled("T")} onClick={()=>{props.getNewList(returnNewDogList("T"))}}/>} label={`T ${findDogNumberByFirstLetter("T")}`}  className="formControlLabel" />
            <FormControlLabel value="U" control={<Radio disabled={checkDisabled("U")} onClick={()=>{props.getNewList(returnNewDogList("U"))}}/>} label={`U ${findDogNumberByFirstLetter("U")}`}  className="formControlLabel" />
            <FormControlLabel value="V" control={<Radio disabled={checkDisabled("V")} onClick={()=>{props.getNewList(returnNewDogList("V"))}}/>} label={`V ${findDogNumberByFirstLetter("V")}`}  className="formControlLabel" />
            <FormControlLabel value="W" control={<Radio disabled={checkDisabled("W")} onClick={()=>{props.getNewList(returnNewDogList("W"))}}/>} label={`W ${findDogNumberByFirstLetter("W")}`}  className="formControlLabel" />
            <FormControlLabel value="X" control={<Radio disabled={checkDisabled("X")} onClick={()=>{props.getNewList(returnNewDogList("X"))}}/>} label={`X ${findDogNumberByFirstLetter("X")}`}  className="formControlLabel" />
            <FormControlLabel value="Y" control={<Radio disabled={checkDisabled("Y")} onClick={()=>{props.getNewList(returnNewDogList("Y"))}}/>} label={`Y ${findDogNumberByFirstLetter("Y")}`}  className="formControlLabel" />
            <FormControlLabel value="Z" control={<Radio disabled={checkDisabled("Z")} onClick={()=>{props.getNewList(returnNewDogList("Z"))}}/>} label={`Z ${findDogNumberByFirstLetter("Z")}`}  className="formControlLabel" />
            <FormControlLabel value="All" control={<Radio onClick={()=>{props.getNewList(returnNewDogList(""))}} />} label="All Dogs"  className="formControlLabel" />

            </RadioGroup>
    </div>
  );
}

export default DogFilter;
