import CreateBeerForm from "./CreateBeerForm";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({
  adapter: new Adapter(),
});

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

  //Given
  const nameInput = wrapper.find({ name: "beerName" });
  const selectInput = wrapper.find({ name: "beerType" });
  const ingredientsInput = wrapper.find({ name: "ingredients" });
  const checkboxInput = wrapper
    .childAt(0)
    .childAt(0)
    .childAt(2)
    .dive()
    .dive()
    .find({ name: "hasCorn" });
  console.log = jest.fn();
  //When
  nameInput.simulate("change", { target: { value: "redbeer" } });
  selectInput.simulate("change", { target: { value: "lager" } });
  checkboxInput.simulate("change");
  ingredientsInput.simulate("change", { target: { value: "barley..." } });
  wrapper.find({ name: "botao" }).simulate("click");

  //Then
  expect(wrapper.find({ name: "botao" }).prop("disabled")).toBe(false);
  expect(console.log).toBeCalledWith(
    `beer name: redbeer\ntype of beer: lager\nhas corn: true\ningredients: barley...`
  );
});

test("should render a form and a button", () => {
  const wrapper = shallow(<CreateBeerForm />);
  //Given
  const buttonInput = wrapper.find({ name: "botao" });
  const nameInput = wrapper.find({ name: "beerName" });
  const selectInput = wrapper.find({ name: "beerType" });
  const ingredientsInput = wrapper.find({ name: "ingredients" });
  const checkboxInput = wrapper.find({ name: "hasCorn" });
  //When
  //Then
  expect(buttonInput).toBeInTheDocument;
  expect(nameInput).toBeInTheDocument;
  expect(selectInput).toBeInTheDocument;
  expect(ingredientsInput).toBeInTheDocument;
  expect(checkboxInput).toBeInTheDocument;
});
