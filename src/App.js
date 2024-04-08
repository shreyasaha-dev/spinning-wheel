import React, { useState } from "react";
import "./App.css";

const colorMeanings = {
  red: "Passion and energy",
  orange: "Joy and creativity",
  yellow: "Happiness and optimism",
  green: "Peace and growth",
  blue: "Trust and stability",
  purple: "Royalty and luxury",
  pink: "Love and compassion",
  brown: "Stability and reliability",
  black: "Mystery and sophistication",
  white: "Peace and calmness",
};

const App = () => {
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const colors = Object.keys(colorMeanings);

  const spinWheel = () => {
    if (!spinning) {
      setSpinning(true);
      const randomIndex = Math.floor(Math.random() * colors.length);
      setTimeout(() => {
        const randomColor = colors[randomIndex];
        setResult(randomColor);
        setSpinning(false);
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className={`wheel ${spinning ? "spin" : ""}`} onClick={spinWheel}>
        <div className="center"></div>
      </div>
      <button className="button" onClick={spinWheel} disabled={spinning}>
        Spin
      </button>
      {result && (
        <div className="result">
          <p>The wheel stopped at {result}.</p>
          <p>Meaning: {colorMeanings[result]}</p>
        </div>
      )}
    </div>
  );
};

export default App;
