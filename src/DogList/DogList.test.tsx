import DogList from "./DogList";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { Select } from "@material-ui/core";
configure({
  adapter: new Adapter(),
});

test("should render a select and change it's value", () => {
  const wrapper = shallow(<DogList />);
  console.log = jest.fn();

  //Given
  const selectInput = wrapper.find(Select).at(0);
  //When

  selectInput.simulate("change", { target: { value: "WolfHound" } });
  //console.log(selectInput.props());
  //Then
  expect(console.log).toBeCalledTimes(1);
  expect(selectInput).toBeInTheDocument;
  expect(console.log).toBeCalledWith("WolfHound");
});
