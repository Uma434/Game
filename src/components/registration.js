// UserRegistration.js
import React, { useState } from "react";
import "../components/registration.css"
const UserRegistration = ({ onStartGame }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    difficulty: "easy ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleStartGame = () => {
    // Check if required fields are filled before starting the game
    if (userData.name && userData.email && userData.mobile) {
      onStartGame(userData);
    } else {
      alert("Please fill in all the required fields (Name, Email, Mobile) before starting the game.");
    }
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={userData.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="text" name="email" value={userData.email} onChange={handleChange} />

        <label>Mobile Number:</label>
        <input type="text" name="mobile" value={userData.mobile} onChange={handleChange} />

        <label>Difficulty Level:</label>
        <select name="difficulty" value={userData.difficulty} onChange={handleChange}>
          <option value="easy ">Easy </option>
          <option value="medium ">Medium</option>
          <option value="hard ">Hard</option>
        </select>

        <button type="button" onClick={handleStartGame}>
          Start Game
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;
