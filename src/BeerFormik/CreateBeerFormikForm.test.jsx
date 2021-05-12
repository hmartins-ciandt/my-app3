import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CreateBeerFormikForm from "./CreateBeerFormikForm";

import {
  Button,
  CardContent,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Form } from "formik";
configure({
  adapter: new Adapter(),
});

test("should render a form and a button and the button be enabled", () => {
  const wrapper = shallow(<CreateBeerFormikForm />);
  const wrapperChild = wrapper.childAt(0);
  const wrapperDive = wrapperChild.dive();
  const wrapperDiveChild = wrapperDive
    .childAt(0)
    .childAt(0)
    .childAt(0)
    .childAt(0);

  //Given
  const nameInput = wrapperDive.find({ name: "beerName" });
  const selectInput = wrapperDive.find({ name: "beerType" });
  const ingredientsInput = wrapperDive.find({ name: "ingredients" });
  const checkboxInput = wrapperDiveChild
    .childAt(2)
    .dive()
    .dive()
    .find({ name: "hasCorn" });
  console.log = jest.fn();
  //When

  nameInput.simulate("change", {
    persist: () => {},
    target: { name: "beerName", value: "redbeer" },
  });
  selectInput.simulate("change", {
    persist: () => {},
    target: { name: "beerType", value: "lager" },
  });
  checkboxInput.simulate("change", {
    persist: () => {},
    target: { name: "hasCorn" },
  });
  ingredientsInput.simulate("change", {
    persist: () => {},
    target: { name: "ingredients", value: "barley..." },
  });

  wrapperChild.dive().find({ name: "botao" }).simulate("click");

  //Then
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toBeCalledWith(`disabled :true`);
});

test("should render a form and a button and when clicked should call a console", () => {
  const wrapper = shallow(<CreateBeerFormikForm />);
  const wrapperChild = wrapper.childAt(0);

  //Given
  const buttonInput = wrapper.find({ name: "botao" });
  console.log = jest.fn();
  //When

  wrapperChild.invoke("onSubmit")({
    beerName: "redbeer",
    beerType: "lager",
    hasCorn: true,
    ingredients: "barley...",
  });

  //Then
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(buttonInput).not.toBeDisabled;
  expect(console.log).toBeCalledWith(
    `beer name: redbeer\ntype of beer: lager\nhas corn: true\ningredients: barley...`
  );
});

test("should render a form and a button", () => {
  const wrapper = shallow(<CreateBeerFormikForm />);
  const wrapperChild = wrapper.childAt(0).dive();

  //Given

  //When
  expect(wrapperChild.find(Button).length).toBe(1);

  //Then
  expect(
    wrapperChild.find(CardContent).matchesElement(
      <CardContent>
        <Form>
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
              type="submit"
              color="secondary"
              variant="contained"
              disabled={true}
            >
              Submit
            </Button>
          </FormControl>
        </Form>
      </CardContent>
    )
  ).toBe(true);
});

test("should render a form and a button and the button be disabled", () => {
  const wrapper = shallow(<CreateBeerFormikForm />);
  const wrapperChild = wrapper.childAt(0);

  //Given
  const buttonInput = wrapper.find("button");

  //When

  //Then
  expect(buttonInput).toBeInTheDocument;
  expect(wrapperChild.dive().find({ name: "botao" }).prop("disabled")).toBe(
    true
  );
});
