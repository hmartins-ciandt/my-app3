import React from 'react';
import { render, screen, } from '@testing-library/react';
import DogDetails from './DogDetails';

test('should render a dog image and a dog name and a button', () => {
  render(<DogDetails dogName={'Rex'} dogImage={'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg'}/>);

  //Given
  const buttonWrapper = screen.queryByText('Bark');
  const h5Wrapper = screen.queryByText('Rex');
  const imgWrapper = screen.getByRole('img');

  //When
  buttonWrapper?.click();

  //Then
  expect(buttonWrapper).toBeInTheDocument();
  expect(h5Wrapper).toBeInTheDocument();
  expect(imgWrapper).toHaveAttribute('src', 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg');
  expect(buttonWrapper?.click).toHaveBeenCalledTimes;
});
