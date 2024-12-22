import React, { useState } from "react";
import './App.css';
import Card from './components/Card'

function App() {
  const today = new Date();

  const [bgColor, setBgColor] = useState("#ADD8E6"); // Default to light blue

  const handleColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const getDayName = (date) => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[date.getDay()];
  };

  return (
      <div className="App">
        <Card text={getDayName(today)} bgColor={bgColor} textColor="white" />
        <Card text={today.getDate()} bgColor={bgColor} textColor="white"/>

        <input
          type="text"
          value={bgColor}
          onChange={handleColorChange}
          placeholder="Enter hex color code"
          style={{
            padding: "10px",
            fontSize: "16px",
            marginLeft: "50%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
    
  );
}

export default App;
