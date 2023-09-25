import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorPicker from './ColorPicker';
import { availableColors } from '../../utils/constants';

describe('ColorPicker Component', () => {
  it('renders color boxes with available colors', () => {
    render(
      <ColorPicker reminderColor='#FFCC80' onChangeColor={() => {}} />
    );

    expect(screen.getByText('Color')).toBeInTheDocument();

    const colorBoxes = screen.getAllByTestId('color-box');
    expect(colorBoxes).toHaveLength(availableColors.length);

    availableColors.forEach((color, index) => {
      const colorBox = colorBoxes[index];
      expect(colorBox).toHaveStyle({ backgroundColor: color });
    });
  });

  it('calls onChangeColor when a color box is clicked', () => {
    const mockOnChangeColor = jest.fn();
    render(
      <ColorPicker
        reminderColor='#FFCC80'
        onChangeColor={mockOnChangeColor}
      />
    );

    const colorBoxes = screen.getAllByTestId('color-box');
    const colorBox = colorBoxes[0];

    fireEvent.click(colorBox);

    expect(mockOnChangeColor).toHaveBeenCalledWith(
      availableColors[0]
    );
  });
});
