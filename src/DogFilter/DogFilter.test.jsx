import React from "react";
import Adapter from "enzyme-adapter-react-16";

import { configure, shallow } from "enzyme";
import DogFilter from "./DogFilter";
import DogRadioButton from "./DogRadioButton";
import { RadioGroup } from "@material-ui/core";

configure({
  adapter: new Adapter(),
});
describe("All the DogFilter tests", () => {
  test("should render all the components", () => {
    const wrapper = shallow(<DogFilter />);
    //Then
    expect(
      wrapper
        .find(DogRadioButton)
        .at(0)
        .matchesElement(<DogRadioButton />)
    ).toBe(true);
  });

  test("should render 26 DogRadioButton", () => {
    const wrapper = shallow(<DogFilter />);

    //Given
    const dogRadioButtonWrapper = wrapper.find(RadioGroup).at(0).children();
    //Then
    expect(dogRadioButtonWrapper.length).toBe(26);
  });
});
