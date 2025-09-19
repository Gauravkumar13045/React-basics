import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("#f0f0f0");

  const colors = ["#FF6347", "#4CAF50", "#2196F3", "#FFD700", "#9C27B0"];

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Color Changer</h1>
      <div

        style={{
          backgroundColor: color,
          height: "150px",
          width: "150px",
          margin: "20px auto",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          transition: "background-color 0.3s ease",
        }}
        
      />
      
      <button onClick={changeColor} style={{ padding: "10px 20px", fontSize: "16px",borderRadius: "10px", cursor: "pointer" }}>
        Change Color
      </button>
    </div>
  );
}

export default ColorChanger;
