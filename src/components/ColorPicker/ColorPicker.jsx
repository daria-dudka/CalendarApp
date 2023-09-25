import React from 'react';
import { availableColors } from '../../utils/constants';
import './ColorPicker.css';

const ColorPicker = ({ reminderColor, onChangeColor }) => {
  return (
    <>
      <h2 className='label'>Color</h2>
      <div className='color-picker'>
        {availableColors.map((color) => (
          <div
            key={color}
            data-testid='color-box'
            className={`color-box ${
              reminderColor === color ? 'selected' : ''
            }`}
            style={{ backgroundColor: color }}
            onClick={() => onChangeColor(color)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ColorPicker;
