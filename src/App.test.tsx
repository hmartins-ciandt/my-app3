import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render a button and when clicked should call an alert", () => {
  render(<App />);

  //Given
  const buttonWrapper = screen.queryByText("botão");
  window.alert = jest.fn();

  //When
  buttonWrapper?.click();

  //Then
  expect(buttonWrapper).toBeInTheDocument();
  expect(window.alert).toHaveBeenCalledTimes(1);
});
