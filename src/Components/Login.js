import React, { useState } from "react";
import './Login.css' ;

const Login = ({ loginUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="text-center login-form">
      <h2 className="mx-2 my-2">Login</h2>
      <form onSubmit={handleSubmit} >
        <input
        className=" input-box"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /> <br></br>
        <input  className="input-box"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br>
        </br>
        <button  className='btn' type="submit ">Login</button>
      </form>
    </div>
  );
};

export default Login;



 
