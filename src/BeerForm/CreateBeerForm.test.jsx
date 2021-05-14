import CreateBeerForm from "./CreateBeerForm";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import {
  CardContent,
  FormControl,
  Button,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
configure({
  adapter: new Adapter(),
});
describe("All the CreateBeerForm tests", () => {
  test("should render a form and a button and the button be disabled", () => {
    const wrapper = shallow(<CreateBeerForm />);
    //Given
    const buttonInput = wrapper.find({ name: "botao" });
    //When
    wrapper.find({ name: "botao" }).simulate("click");

    //Then
    expect(buttonInput).toBeInTheDocument;

    expect(wrapper.find({ name: "botao" }).prop("disabled")).toBe(true);
  });

  test("should render a form and a button and when clicked should call console", () => {
    const wrapper = shallow(<CreateBeerForm />);
    const wrapperChild = wrapper.childAt(0).childAt(0).childAt(0);

    //Given
    const nameInput = wrapper.find({ name: "beerName" });
    const selectInput = wrapper.find({ name: "beerType" });
    const ingredientsInput = wrapper.find({ name: "ingredients" });
    const checkboxInput = wrapperChild
      .childAt(2)
      .dive()
      .dive()
      .find({ name: "hasCorn" });
    // console.log = jest.fn();
    //When
    nameInput.simulate("change", { target: { value: "redbeer" } });
    selectInput.simulate("change", { target: { value: "lager" } });
    checkboxInput.simulate("change");
    ingredientsInput.simulate("change", { target: { value: "barley..." } });
    wrapper.find({ name: "botao" }).simulate("click");

    //Then
    expect(wrapper.find({ name: "botao" }).prop("disabled")).toBe(false);
    // expect(console.log).toBeCalledWith(
    //  `beer name: redbeer\ntype of beer: lager\nhas corn: true\ningredients: barley...`
    //);
  });

  test("should render a form and a button", () => {
    const wrapper = shallow(<CreateBeerForm />);
    const wrapperChild = wrapper.childAt(0).dive();
    //Given

    //When
    //Then

    expect(
      wrapperChild.find(CardContent).matchesElement(
        <CardContent>
          <FormControl>
            <TextField
              type="text"
              name="beerName"
              id="beerName"
              label="Beer Name"
              required
            ></TextField>
            <label>
              Type of Beer:
              <Select name="beerType" id="beerType" value="" required>
                <MenuItem value={""}>Selecione</MenuItem>
                <MenuItem value={"ale"}>Ale</MenuItem>
                <MenuItem value={"lager"}>Lager</MenuItem>
                <MenuItem value={"stout"}>Stout</MenuItem>
              </Select>
            </label>
            <FormControlLabel />
            <TextField
              name="ingredients"
              id="ingredients"
              label="ingredients"
              required
            ></TextField>

            <Button
              name="botao"
              id="botao"
              color="primary"
              variant="contained"
              disabled={true}
            >
              Submit
            </Button>
          </FormControl>
        </CardContent>
      )
    ).toBe(true);
  });
});
