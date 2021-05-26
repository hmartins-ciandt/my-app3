import React from "react";
import Adapter from "enzyme-adapter-react-16";

import { configure, shallow } from "enzyme";
import DogRadioButton from "./DogRadioButton";
import { FormControlLabel } from "@material-ui/core";

configure({
  adapter: new Adapter(),
});
describe("All the DogRadioButton tests", () => {
  test("should render all the components", () => {
    const wrapper = shallow(<DogRadioButton />);

    //Given

    //When

    //Then
    expect(
      wrapper.matchesElement(
        <div>
          <FormControlLabel className="formControlLabel" />
          <div></div>
        </div>
      )
    ).toBe(true);
  });

  test("should render the radio button for alldogs", () => {
    const wrapper = shallow(<DogRadioButton dogLetter="Z" />);

    //Given

    //When

    //Then
    expect(
      wrapper.matchesElement(
        <div>
          <FormControlLabel className="formControlLabel" />
          <FormControlLabel className="formControlLabel" />
        </div>
      )
    ).toBe(true);
  });
});
