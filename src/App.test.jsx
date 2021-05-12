import React from "react";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

import { configure, shallow } from "enzyme";
import { Grid } from "@material-ui/core";
import DogDetails from "./DogDetails/DogDetails";
import CreateBeerForm from "./BeerForm/CreateBeerForm";
import CreateBeerFormikForm from "./BeerFormik/CreateBeerFormikForm";
import DogList from "./DogList/DogList";

configure({
  adapter: new Adapter(),
});

test("should render a button and when clicked should call an alert", () => {
  const wrapper = shallow(<App />);

  //Given
  const buttonInput = wrapper.find("button").at(0);
  window.alert = jest.fn();

  //When
  buttonInput.simulate("click");

  //Then
  expect(buttonInput.length).toBe(1);
  expect(window.alert).toHaveBeenCalledTimes(1);
});

test("should render all the child components", () => {
  const wrapper = shallow(<App />);

  //Given

  //When
  const wrapperExpected = (
    <DogDetails
      dogName="red"
      dogImage="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
    />
  );
  //Then
  expect(wrapper.find(DogDetails).matchesElement(wrapperExpected)).toBe(true);

  expect(wrapper.find(CreateBeerForm).matchesElement(<CreateBeerForm />)).toBe(
    true
  );

  expect(
    wrapper.find(CreateBeerFormikForm).matchesElement(<CreateBeerFormikForm />)
  ).toBe(true);

  expect(wrapper.find(DogList).matchesElement(<DogList />)).toBe(true);

  expect(
    wrapper.matchesElement(
      <div>
        <button>botão</button>
        <Grid container spacing={3} justify="center">
          <Grid item xs={3}>
            <DogDetails
              dogName={"red"}
              dogImage={
                "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
              }
            />
          </Grid>

          <Grid container spacing={3} justify="center">
            <Grid item xs={5} className="grid">
              <CreateBeerForm />
            </Grid>
            <Grid item xs={5} className="grid">
              <CreateBeerFormikForm />
            </Grid>
          </Grid>
        </Grid>
        <DogList />
      </div>
    )
  ).toBe(true);
});
