import DogList from "./DogList";
import * as api from "./FetchDogImage";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import {
  Select,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import Loader from "react-loader-spinner";

configure({
  adapter: new Adapter(),
});

const flushPromises = () => new Promise(setImmediate);
jest.mock("./FetchDogImage");
test("should render a select and change it's value", async () => {
  api.default = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve([
        "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg",
      ])
    );
  const mockedFunction = jest.fn();
  const wrapper = shallow(
    <DogList getDog={mockedFunction} getImg={mockedFunction} />
  );

  //Given
  const selectInput = wrapper.find(Select).at(0);
  //When
  selectInput.prop("onChange")({ target: { value: "Wolfhound" } });
  await flushPromises();
  //Then
  expect(wrapper.find("img").at(0).prop("src")).toBe(
    "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg"
  );
});

test("should render a select", () => {
  const wrapper = shallow(<DogList />);
  //Given
  const selectInput = wrapper.find(Select);
  const cardInput = wrapper.find(Card);
  const cardContentInput = wrapper.find(CardContent);
  const formControl = wrapper.find(FormControl);
  const gridInput = wrapper.find(Grid);
  const inputLabelInput = wrapper.find(InputLabel);
  const menuItemInput = wrapper.find(MenuItem);
  const divInput = wrapper.find("div");
  //Then
  expect(selectInput.length).toBe(1);
  expect(cardInput.length).toBe(1);
  expect(cardContentInput.length).toBe(1);
  expect(formControl.length).toBe(1);
  expect(gridInput.length).toBe(1);
  expect(inputLabelInput.length).toBe(1);
  expect(menuItemInput.length).toBe(1);
  expect(divInput.length).toBe(2);
});

test("should render Loader and img should not render", () => {
  api.default = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve([
        "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg",
      ])
    );
  const mockedFunction = jest.fn();
  const wrapper = shallow(
    <DogList getDog={mockedFunction} getImg={mockedFunction} />
  );
  //Given
  const selectInput = wrapper.find(Select);
  //When
  selectInput.prop("onChange")({ target: { value: "WolfHound" } });
  const loaderInput = wrapper.find(Loader);
  const imgInput = wrapper.find("img");

  //Then
  expect(loaderInput.length).toBe(1);
  expect(imgInput.length).toBe(0);
});

test("should render img and Loader should not render", () => {
  const wrapper = shallow(<DogList />);
  //Given
  const loaderInput = wrapper.find(Loader);
  const imgInput = wrapper.find("img");
  //When
  //Then
  expect(loaderInput.length).toBe(0);
  expect(imgInput.length).toBe(1);
});

test("should change the prop value", async () => {
  api.default = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve([
        "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg",
      ])
    );

  const mockedFunction = jest.fn();
  const wrapper = shallow(
    <DogList getDog={mockedFunction} getImg={mockedFunction} />
  );
  //Given
  const selectInput = wrapper.find(Select).at(0);
  //When
  selectInput.prop("onChange")({ target: { value: "wolfhound" } });
  await flushPromises();

  //Then
  expect(mockedFunction).toBeCalledTimes(2);
});
