import React, { useState, useEffect } from "react";
import "./Authentication.css";

function Authentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isAuthenticated);
  }, []);

  const loginPart = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  const logOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginForm = () => (
    <form>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="inputField"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputField"
        />
      </label>
      <br />
      <button type="button" onClick={loginPart} className="loginButton">
        Login
      </button>
      {error && <p className="errorMessage">{error}</p>}
    </form>
  );

  const loggedIn = () => (
    <div>
      <p className="welcomeMessage">Welcome, {username}!</p>
      <button onClick={logOut} className="logoutButton">
        Logout
      </button>
    </div>
  );

  return (
    <div className="container">
      <h1 className="title">Simple POS System</h1>
      {isLoggedIn ? loggedIn() : loginForm()}
    </div>
  );
}

export default Authentication;
