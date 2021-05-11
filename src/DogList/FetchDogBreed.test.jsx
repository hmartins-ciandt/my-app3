import fetchDogBreed from "./FetchDogBreed";
import { map, keys } from "lodash";

test("it should call an DogBreed API Service and return an array of dogs", async () => {
  const list = await fetchDogBreed();
  const dogs = map(keys(list));
  //Given

  //Then
  expect(dogs).toBeTruthy();
});
