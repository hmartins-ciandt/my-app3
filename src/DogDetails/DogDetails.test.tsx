import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import DogDetails from "./DogDetails";

test("should render a dog name and a dog image", () => {
  render(
    <DogDetails
      dogName={"Rex"}
      dogImage={
        "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
      }
      onBark={() => {
        alert("alerta");
      }}
    />
  );

  //Given
  const h5Wrapper = screen.queryByText("Rex");
  const imgWrapper = screen.getByRole("img");

  //Then
  expect(h5Wrapper).toBeInTheDocument();
  expect(imgWrapper).toHaveAttribute(
    "src",
    "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
  );
});

test("should render a button and call an alert", () => {
  render(
    <DogDetails
      onBark={() => {
        alert("alerta");
      }}
    />
  );

  //Given
  const buttonWrapper = screen.queryByText("Bark");
  window.alert = jest.fn();

  //When
  buttonWrapper?.click();

  //Then
  expect(buttonWrapper).toBeInTheDocument();
  expect(window.alert).toHaveBeenCalledTimes(1);
});

test("should render a button and call a hook", () => {
  render(
    <DogDetails
      dogName={"Rex"}
      onBark={() => {
        alert("alerta");
      }}
    />
  );

  //Given
  const buttonWrapper = screen.queryByText("Scold");
  const count = screen.queryByText("You scolded Rex 0 times");
  //When
  buttonWrapper?.click();

  //Then
  expect(buttonWrapper).toBeInTheDocument();
  expect(count).toHaveTextContent("You scolded Rex 1 times");
});
