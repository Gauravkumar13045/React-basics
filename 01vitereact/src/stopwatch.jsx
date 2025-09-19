import React, { useState, useRef } from "react";
import "./index.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; 
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const formatTime = () => {
    const mins = String(Math.floor(time / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>⏱ React Stopwatch</h1>
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={startTimer} className="btn start">Start</button>
        <button onClick={stopTimer} className="btn stop">Stop</button>
        <button onClick={resetTimer} className="btn reset">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
