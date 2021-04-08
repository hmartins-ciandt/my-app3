import React from 'react';
import { render, screen, } from '@testing-library/react';
import DogDetails from './DogDetails';

test('should render a dog name', () => {
  render(<DogDetails dogName={'Rex'} />);

  //Given
  const h5Wrapper = screen.queryByText('Rex');

  //Then
  expect(h5Wrapper).toBeInTheDocument();

});


test('should render a dog image', () => {
  render(<DogDetails dogImage={'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg'} />);

  //Given
  const imgWrapper = screen.getByRole('img');
  window.alert = jest.fn();

  //Then
  expect(imgWrapper).toHaveAttribute('src', 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg');
});


test('should render a button and call an alert', () => {
  render(<DogDetails onBark = {()=>{ alert('alerta')}} />);

  //Given
  const buttonWrapper = screen.queryByText('Bark');
  window.alert = jest.fn();

  //When
  buttonWrapper?.click();

  //Then
  expect(buttonWrapper).toBeInTheDocument();
  expect(window.alert).toHaveBeenCalledTimes(1);
});