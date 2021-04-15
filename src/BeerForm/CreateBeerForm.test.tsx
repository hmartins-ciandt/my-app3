import CreateBeerForm from './CreateBeerForm';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({
  adapter: new Adapter()
});

test('should render a button and when clicked should call an alert', () => {
    const wrapper = shallow(<CreateBeerForm  />);
    
    //Given
    const buttonInput = wrapper.find('button');
    const nameInput = wrapper.find({type: 'text'});
    const selectInput = wrapper.find('select');
    const ingredientsInput = wrapper.find('textarea')
    const checkboxInput = wrapper.find({type: 'checkbox'});
    console.log = jest.fn();
    //When
    nameInput.simulate('change',{target :{value:'redbeer'}});
    selectInput.simulate('change', {target:{value:'lager'}});
    checkboxInput.simulate('change');
    ingredientsInput.simulate('change', {target:{value: 'barley...'}})
    wrapper.find('button').simulate('click');   
    //Then
    expect(buttonInput).toBeInTheDocument;
    expect(wrapper.matchesElement(<div className="divForm" >
    <form>
    <label>
    Beer Name:  
    <input type="text" name="beer"   ></input>
    </label>
    <br/>
    <label>
    Type of Beer:  
    <select    >
      <option value="" >Selecione</option>
      <option value="ale">Ale</option>
      <option value="lager">Lager</option>
      <option value="stout">Stout</option>
    </select>
    </label>
    <br/>
    <label >
    Has Corn:  
    <input type="checkbox" name="corn"  ></input>
    </label>
    <br/>
    <label>
    Ingredients: 
    <textarea  ></textarea>
    </label>
    <br/>
    </form>
    <button  >Submit</button>
    
    
    </div>)).toBeTruthy();
    expect(console.log).toBeCalledWith(`beer name: redbeer\ntype of beer: lager\nhas corn: true\ningredients: barley...`);
  });