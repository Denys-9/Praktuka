// ColorPalette.jsx
import React from 'react';
import ColorButton from './ColorButton'; // Переконайтеся, що правильний шлях до ColorButton

const ColorPalette = ({ palette, onColorSelect }) => {
  return (
    <div className="color-palette">
      {palette.colors.map((color, index) => (
        <ColorButton key={index} color={color} onButtonClick={() => onColorSelect(color)} />
      ))}
    </div>
  );
};

export default ColorPalette;
