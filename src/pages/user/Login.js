import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Login.css"; // Import the CSS file for styling
import image from "../../assets/img.png"; // Correct import

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // For error handling
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle form submission for login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login", {
        username: username,
        password: password,
      });

      // Handle successful login
      localStorage.setItem("access_token", response.data.access_token); // Store token

      alert("Login successful");

      // Redirect to home page
      navigate("/Home2"); // You can change "/home" to any path you want to redirect to
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.detail : "Something went wrong.");
    }
  };

  return (
    <div className="login-page">
      <header className="header">
        <h1>Gear Up for Success—Welcome to SUSL Sports Equipment Hub!</h1>
      </header>
      <div className="content">
        <div className="image-container">
          <img src={image} alt="Sports Players" className="sports-image" /> {/* Fixed variable name */}
        </div>
        <div className="form-container">
          <div className="form-box">
            <h2 className="system-title">SPORTS EQUIPMENT MANAGEMENT SYSTEM</h2>
            <h1 className="app-title">equipZone</h1>
            <h2>Welcome</h2>
            <p>"Welcome to equipZone! Log in and get your equipment ready."</p>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form className="login-form" onSubmit={handleLogin}>
              <label htmlFor="index-number">Index Number</label>
              <input
                type="text"
                id="index-number"
                placeholder="Enter your Index Number"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password" // Added missing placeholder
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />

              <div className="options">
                <div>
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)} // Toggle remember me state
                  />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
              </div>

              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
