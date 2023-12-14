// App.js
import React, { useState } from "react";
import GreenLightRedLight from "./components/game";
import UserRegistration from "./components/registration";


function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [userData, setUserData] = useState(null);

  const startGame = (user) => {
    setUserData(user);
    setGameStarted(true);
  };

  return (
    <div className="App">
      {gameStarted ? (
        <GreenLightRedLight userData={userData} />
      ) : (
        <UserRegistration onStartGame={startGame} />
      )}
    </div>
  );
}

export default App;
