import { FormLabel, RadioGroup } from "@material-ui/core";

import DogRadioButton from "./DogRadioButton";

function DogFilter(props: any) {
  let alphabet = [];

  for (let i = 0; i < 26; i++) {
    alphabet[i] = String.fromCharCode(65 + i);
  }

  return (
    <div>
      <FormLabel>Dog Filter</FormLabel>
      <RadioGroup row>
        {alphabet.map((letter: string, keys: number) => (
          <DogRadioButton
            getDogListLetter={props.getNewList}
            dogLetter={letter}
            key={keys}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

export default DogFilter;
