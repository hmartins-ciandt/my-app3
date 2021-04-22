import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CreateBeerFormikForm from "./CreateBeerFormikForm";
configure({
  adapter: new Adapter(),
});

test("should render a form and a button and the button be abled", () => {
  const wrapper = shallow(<CreateBeerFormikForm />);
  const wrapperChild = wrapper.childAt(0);

  //Given
  const nameInput = wrapperChild.dive().find({ name: "beerName" });
  const selectInput = wrapperChild.dive().find({ name: "beerType" });
  const ingredientsInput = wrapperChild.dive().find({ name: "ingredients" });
  const checkboxInput = wrapperChild
    .dive()
    .childAt(0)
    .childAt(0)
    .childAt(0)
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
  expect(console.log).toBeCalledWith(`disabled :false`);
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
  const wrapperChild = wrapper.childAt(0);
  //Given
  const buttonInput = wrapper.find({ name: "botao" });
  const nameInput = wrapperChild.dive().find({ name: "beerName" });
  const selectInput = wrapperChild.dive().find({ name: "beerType" });
  const ingredientsInput = wrapperChild.dive().find({ name: "ingredients" });
  const checkboxInput = wrapperChild.dive().find({ name: "hasCorn" });
  //When
  //Then
  expect(buttonInput).toBeInTheDocument;
  expect(nameInput).toBeInTheDocument;
  expect(selectInput).toBeInTheDocument;
  expect(ingredientsInput).toBeInTheDocument;
  expect(checkboxInput).toBeInTheDocument;
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
