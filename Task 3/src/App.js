// App.jsx
import React, { useState } from 'react';
import ColorPalette from './ColorPalette';
import src_notify from './src_notify.mp3';
import paletteData from './pallete.json';
import ColorButton from './ColorButton';

const App = () => {
  const [selectedPalette, setSelectedPalette] = useState(paletteData[0]);

  const handleColorSelect = (color) => {
    navigator.clipboard.writeText(color);
    const audio = new Audio(src_notify);
    audio.play();
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Плоские цвета пользовательского интерфейса</h1>
      </header>

      <main className="main">
        <ColorPalette palette={selectedPalette} onColorSelect={handleColorSelect} />
      </main>

      <footer className="footer">
        <p>Polishchuk Denys. He, depending on the situation, will either do something impressive, or do something touching, or do something foolish. Either way, he will always leave a mark behind.</p>
      </footer>
    </div>
  );
};

export default App;
