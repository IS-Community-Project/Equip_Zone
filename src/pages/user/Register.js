import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import registrationImage from "../../assets/s 2.png"; 
import "./Register.css";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/auth/register", {
        username,
        password,
        nic,
        email,
        phone,
      });

      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.detail : "Something went wrong.");
    }
  };

  return (
    <div className="container">
      {/* Left Image Section */}
      <div className="image-section">
        <img src={registrationImage} alt="Registration" className="register-image" /> {/* ✅ Use imported image */}
      </div>

      {/* Right Form Section */}
      <div className="form-section">
        <div className="form-frame">
          <h2 className="system-title">SPORTS EQUIPMENT MANAGEMENT SYSTEM</h2>
          <h1 className="form-heading">Create new account.</h1>
          <p className="login-link">
            Already a Member? <a href="/login">Login</a>
          </p>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="NIC (National Identity Card)"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone no"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
