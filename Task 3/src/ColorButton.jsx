// ColorButton.jsx
import React from 'react';

const ColorButton = ({ color, onButtonClick }) => {
  return (
    <button className="color-button" style={{ backgroundColor: color }} onClick={onButtonClick}></button>
  );
};

export default ColorButton;
