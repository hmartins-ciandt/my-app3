import { configure, shallow } from "enzyme";
import DogDetails from "./DogDetails";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter(),
});

const mockedData = jest.fn();
describe("All the DogDetails tests", () => {
  test("should render a dog name and a dog image", () => {
    const wrapper = shallow(
      <DogDetails
        dogName={"Rex"}
        dogImage={
          "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
        }
        onBark={() => {
          alert("alerta");
        }}
        count={0}
        getCount={mockedData}
      />
    );

    //Given

    //Then
    expect(
      wrapper.matchesElement(
        <div>
          <img
            className="dogImage"
            src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
            alt=""
          />
          <h5>Rex</h5>
          <button>Bark</button>
          <button>Scold</button>
          <h5>You scolded Rex 0 times</h5>
        </div>
      )
    ).toBe(true);
  });

  test("should render a button and call an alert", () => {
    const wrapper = shallow(
      <DogDetails
        onBark={() => {
          alert("alerta");
        }}
        count={0}
        getCount={mockedData}
      />
    );

    //Given
    const buttonInput = wrapper.find("button").at(0);
    window.alert = jest.fn();

    //When
    buttonInput.simulate("click");

    //Then
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  test("should render a button and call a hook", () => {
    const wrapper = shallow(<DogDetails getCount={mockedData} />);

    //Given

    const buttonInput = wrapper.find("button").at(1);
    //When
    buttonInput.simulate("click");

    //Then
    expect(mockedData).toBeCalledTimes(1);
  });
});
