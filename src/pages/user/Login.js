import React from 'react';
import './Login.css'; // Import a CSS file for styling

const LoginPage = () => {
  return (
    <div className="login-page">
      <header className="header">
        <h1>Gear Up for Success—Welcome to SUSL Sports Equipment Hub!</h1>
      </header>
      <div className="content">
        <div className="image-container">
          <img
            src="https://example.com/sports-image.jpg"
            alt="Sports Players"
            className="sports-image"
          />
        </div>
        <div className="form-container">
          <div className="form-box">
            <h2 className="system-title">SPORTS EQUIPMENT MANAGEMENT SYSTEM</h2>
            <h1 className="app-title">equipZone</h1>
            <h2>Welcome</h2>
            <p>"Welcome to equipZone! Log in and get your equipment ready."</p>
            <form className="login-form">
              <label htmlFor="index-number">Index Number</label>
              <input
                type="text"
                id="index-number"
                placeholder="Enter your Index Number"
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder=""
              />

              <div className="options">
                <div>
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <a href="#" className="forgot-password">
                  forgot your password?
                </a>
              </div>

              <button type="submit" className="login-button">
                Login
              </button>

              <p className="register-link">
                Don’t have an account? <a href="#">Register here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;