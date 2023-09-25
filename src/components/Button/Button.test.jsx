import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button Component', () => {
  it('renders a button with the provided name as a class', () => {
    const name = 'my-button';
    render(<Button name={name} />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('btn');
    expect(button).toHaveClass(name);
  });

  it('renders children or name text inside the button', () => {
    const buttonText = 'Click Me';
    render(<Button>{buttonText}</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent(buttonText);
  });

  it('calls the provided onClick function when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
