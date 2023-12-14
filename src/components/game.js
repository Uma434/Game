// GreenLightRedLight.js
import React, { useState, useEffect } from "react";
import "../components/game.css";

const GreenLightRedLight = ({ userData }) => {
  const [currentColor, setCurrentColor] = useState("red");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(
    userData.difficulty === "hard" ? 40 : userData.difficulty === "medium" ? 40 : 40
  );
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentColor(getRandomColor());
      setTimeLeft((prevTime) => prevTime - 1);
      if (
        timeLeft === 0 ||
        score >=
          (userData.difficulty === "hard" ? 25 : userData.difficulty === "medium" ? 15 : 10)
      ) {
        setGameOver(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, userData.difficulty, score]);

  const getRandomColor = () => (Math.random() < 0.5 ? "green" : "red");

  const handleBoxClick = () => {
    if (!gameOver) {
      if (currentColor === "green") {
        setScore(score + 1);
      } else {
        setGameOver(true);
      }
    }
  };

  // Use useEffect to trigger color change between 1s and 2s after each button click
useEffect(() => {
  const colorChangeTimeout = setTimeout(() => {
    setCurrentColor(getRandomColor());
  },Math.random() * 1000 + 1000);

  return () => {
    clearTimeout(colorChangeTimeout);
  };
}, [gameOver, score]);

  return (
    <div>
    <h2>Green Light/Red Light Game</h2>
   
    <div id="a1">
     
      
      <h3>Welcome, {userData.name}!</h3>
      <h3> {userData.difficulty}</h3>
      {gameOver ? (
        <h3>
          {score >=
          (userData.difficulty === "hard" ? 25 : userData.difficulty === "medium" ? 15 : 10)
            ? "You win!"
            : "Game Over! You Lost"}
        </h3>
      ) : (
        <div>
          <button
            className={`box ${currentColor}`}
            onClick={handleBoxClick}
            style={{ width: "80px", height: "30px", backgroundColor: currentColor }}
          >
            Click
          </button>
          <p>Score: {score}</p>
          <p>Time Left: {timeLeft} seconds</p>
        </div>
       
       
      )}
    </div>
    </div>
  );
};

export default GreenLightRedLight;


