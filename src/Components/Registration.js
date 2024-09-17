import React, { useState } from "react";
import './Registration.css'

const Registration = ({ registerUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="text-center registration-form">
      <h2 className="mx-2 my-2">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
        className=" input-box"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
        className=" input-box"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br></br>
        <button type="submit"  className="btn">Register</button>
      </form>
    </div>
  );
};

export default Registration;