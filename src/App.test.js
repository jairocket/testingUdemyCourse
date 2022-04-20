import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  //find element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  //expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  
  //click the button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
  expect(colorButton.textContent).toBe('Change to red')
})
