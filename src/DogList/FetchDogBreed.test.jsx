import fetchDogBreed from "./FetchDogBreed";
import { map, keys } from "lodash";

const flushPromises = () => new Promise(setImmediate);
test("it should call an DogBreed API Service and return an array of dogs", async () => {
  const list = await fetchDogBreed();
  const dogs = map(keys(list));
  await flushPromises();
  //Given

  //Then
  expect(dogs.length).toBe(95);
});
