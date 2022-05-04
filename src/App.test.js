import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App'
test('button has correct initial color', () => {
  render(<App />);

  //find element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});

  //expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'Medium Violet Red'})
});

test('button turns Midnight Blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  
  //click the button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'Midnight Blue'})
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red')
});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox');
  //check that the button starts out enabled
  expect(colorButton).toBeEnabled();
  //check that the checkbox starts out unchecked
  expect(checkbox).not.toBeChecked();

});

//quiz test #1

test('when checkbox is checked, button should be disabled', ()=>{
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

//quiz test #2

test('Button should become gray when the button is disabled', ()=>{
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'Medium Violet Red'});
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'Midnight Blue'});
})

describe('spaces befor camel-case capital letters', ()=> {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });

  test('works for multiple inner capital letters', () =>{
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  });
})