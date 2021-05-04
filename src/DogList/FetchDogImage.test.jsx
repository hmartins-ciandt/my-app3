import fetchDogImage from "./FetchDogImage";
import { map, keys } from "lodash";

test("it should call an DogImage API Service and return an array of images", async () => {
  const wolfhound = await fetchDogImage("wolfhound");
  //Given
  const wolfhoundFetch = map(keys(wolfhound));
  //Then
  expect(wolfhoundFetch.length).toBe(218);
});
