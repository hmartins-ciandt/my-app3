import fetchDogImage from "./FetchDogImage";
import { map, keys } from "lodash";

test("it should call an DogImage API Service and return an array of images", async () => {
  const wolfhound = await fetchDogImage("wolfhound");
  var wolfhoundFetch;

  //Give
  if (typeof wolfhound !== "string") {
    wolfhoundFetch = map(keys(wolfhound));
  }

  //Then
  expect(wolfhoundFetch).toBeTruthy();
});

test("it should call an DogImage API Service wronly and return a string message ", async () => {
  const duck = await fetchDogImage("duck");
  var duckFetch;

  //Given
  if (typeof duck !== "string") {
    duckFetch = map(keys(duck));
  }

  //Then
  expect(duckFetch).toBeFalsy();
});
