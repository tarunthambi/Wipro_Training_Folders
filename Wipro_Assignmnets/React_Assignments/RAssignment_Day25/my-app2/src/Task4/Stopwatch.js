import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Stopwatch = ({ initialTime = 0, onTimeUpdate }) => {
  const [elapsedTime, setElapsedTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setElapsedTime(prevTime => {
          const newTime = prevTime + 10;
          onTimeUpdate(newTime);
          return newTime;
        });
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning, onTimeUpdate]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    onTimeUpdate(0);
  };

  const formatTime = (time) => {
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');
    const seconds = String(Math.floor(time / 1000) % 60).padStart(2, '0');
    const minutes = String(Math.floor(time / 60000)).padStart(2, '0');
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="container text-center mt-4">
      <h1>{formatTime(elapsedTime)}</h1>
      <div className="mt-3">
        <button
          className="btn btn-success mx-2"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
