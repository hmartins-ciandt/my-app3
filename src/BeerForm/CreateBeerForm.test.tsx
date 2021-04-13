import { render, screen, } from '@testing-library/react';
import CreateBeerForm from './CreateBeerForm';

test('should render a button and when clicked should call an alert', () => {
    render(<CreateBeerForm />);
  
    //Given
    const inputName = screen.queryByTitle('');
    const inputType = screen.queryByText('combobox');
    const inputCorn = screen.queryByText('checkbox');
    const inputIng = screen.queryByText('textarea')
    const buttonWrapper = screen.queryByText('Submit');
    
  
    //When
    buttonWrapper?.click();
  
    //Then
    expect(inputName).toBeInTheDocument();
    expect(inputType).toBeInTheDocument();
    expect(inputCorn).toBeInTheDocument();
    expect(inputIng).toBeInTheDocument();
    expect(buttonWrapper).toBeInTheDocument();
    expect(console.log).toHaveTextContent;
  });