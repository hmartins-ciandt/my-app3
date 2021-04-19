import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CreateBeerFormikForm from "./CreateBeerFormikForm";
configure({
  adapter: new Adapter(),
});

test("should render a form and a button and when clicked should call alert", () => {
  const wrapper = shallow(<CreateBeerFormikForm />);
  const wrapperChild = wrapper.childAt(0);

  //Given
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
  expect(console.log).toBeCalledWith(
    `beer name: redbeer\ntype of beer: lager\nhas corn: true\ningredients: barley...`
  );
});
test("should render a form and a button and when clicked should call alert", () => {
  const wrapper = shallow(<CreateBeerFormikForm />);

  //Given
  const buttonInput = wrapper.find("button");
  const nameInput = wrapper.find({ type: "text" });
  const selectInput = wrapper.find("select");
  const ingredientsInput = wrapper.find("textarea");
  const checkboxInput = wrapper.find({ type: "checkbox" });
  //When
  //Then
  expect(buttonInput).toBeInTheDocument;
  expect(nameInput).toBeInTheDocument;
  expect(selectInput).toBeInTheDocument;
  expect(ingredientsInput).toBeInTheDocument;
  expect(checkboxInput).toBeInTheDocument;
});
