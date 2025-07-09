import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

export default App = () => {
  const [progress, setProgress] = useState(30);
  const intervalRef = useRef(null);

  const handleStartClick = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };
  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="progress-container">
        <div
          style={{
            backgroundColor: "green", // green
            width: `${progress}%`,
            height: "100%",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "10px",
            color: "white",
            fontWeight: "bold",
            transition: "width 0.1s linear",
          }}
        >
          {progress}%
        </div>
      </div>
      <button onClick={handleStartClick} className="start-button">
        Start
      </button>
    </div>
  );
};
