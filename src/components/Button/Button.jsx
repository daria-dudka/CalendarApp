import React from 'react';
import './Button.css';

const Button = ({ name, onClick, children }) => {
  return (
    <button type='button' className={`btn ${name}`} onClick={onClick}>
      {children ?? name}
    </button>
  );
};

export default Button;
