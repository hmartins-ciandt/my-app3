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
  const wrapper = shallow(<DogList />);

  //Given
  const selectInput = wrapper.find(Select).at(0);
  //When
  selectInput.prop("onChange")({ target: { value: "WolfHound" } });
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
                  <Select name="dogSelect" value="">
                    <MenuItem key="" value="">
                      {""}
                    </MenuItem>
                  </Select>
                  <img className="dogImage" src="" alt="" />
                </div>
              </FormControl>
            </Grid>
          </CardContent>
        </Card>
      </div>
    )
  ).toBeTruthy();
});
