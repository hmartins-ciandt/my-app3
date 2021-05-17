import DogList from "./DogList";
import fetchDogImage from "./FetchDogImage";
import fetchDogBreed from "./FetchDogBreed";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import {
  Select,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
} from "@material-ui/core";
import Loader from "react-loader-spinner";
import React from "react";

configure({
  adapter: new Adapter(),
});

const flushPromises = () => new Promise(setImmediate);
jest.mock("./FetchDogImage");
jest.mock("./FetchDogBreed");

describe("All the DogLists tests", () => {
  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
    jest.spyOn(React, "useCallback").mockImplementation((f) => f);
    jest.spyOn(React, "useMemo").mockImplementation((f) => f());

    fetchDogBreed.mockImplementation(() =>
      Promise.resolve({ Wolfhound: [""] })
    );

    fetchDogImage.mockImplementation(() =>
      Promise.resolve([
        "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg",
      ])
    );
  });

  test("should render a select and change it's value", async () => {
    const mockedFunction = jest.fn();
    const wrapper = shallow(
      <DogList
        getDog={mockedFunction}
        getImg={mockedFunction}
        getCount={mockedFunction}
      />
    );

    //Given
    await flushPromises();
    const selectInput = wrapper.find(Select).at(0);
    //When
    selectInput.prop("onChange")({ target: { value: "wolfhound" } });
    await flushPromises();
    //Then
    expect(wrapper.find("img").at(0).prop("src")).toBe(
      "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg"
    );
  });

  test("should render a select", () => {
    const wrapper = shallow(<DogList />);
    //Then
    expect(
      wrapper.matchesElement(
        <div>
          <Card>
            <CardContent>
              <Grid item={true} xs={1}>
                <FormControl>
                  <div>
                    <InputLabel id="dogList">DogList</InputLabel>
                    <Select name="dogSelect" value=""></Select>
                    <img className="dogImage" src="" alt="" />
                  </div>
                  <h5>Choose a dog</h5>
                </FormControl>
              </Grid>
            </CardContent>
          </Card>
        </div>
      )
    ).toBe(true);
  });

  test("should render Loader and img should not render", async () => {
    const mockedFunction = jest.fn();
    const wrapper = shallow(
      <DogList
        getDog={mockedFunction}
        getImg={mockedFunction}
        getCount={mockedFunction}
      />
    );
    //Given
    await flushPromises();
    const selectInput = wrapper.find(Select);
    //When
    selectInput.prop("onChange")({ target: { value: "Wolfhound" } });
    const loaderInput = wrapper.find(Loader);
    const imgInput = wrapper.find("img");
    //Then
    expect(
      loaderInput.matchesElement(
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          className=""
          visible={true}
          timeout={0}
        />
      )
    ).toBe(true);
    expect(imgInput.length).toBe(0);
  });

  test("should render img and Loader should not render", () => {
    const wrapper = shallow(<DogList />);
    //Given
    const loaderInput = wrapper.find(Loader);
    const imgInput = wrapper.find("img");
    //Then
    expect(loaderInput.length).toBe(0);
    expect(
      imgInput.matchesElement(<img className="dogImage" src="" alt="" />)
    ).toBe(true);
  });

  test("should change the prop value", async () => {
    const mockedFunction = jest.fn();
    const wrapper = shallow(
      <DogList
        getDog={mockedFunction}
        getImg={mockedFunction}
        getCount={mockedFunction}
      />
    );
    //Given
    await flushPromises();
    const selectInput = wrapper.find(Select).at(0);
    //When
    selectInput.prop("onChange")({ target: { value: "Wolfhound" } });
    await flushPromises();

    //Then
    expect(mockedFunction).toBeCalledTimes(3);
  });
});
