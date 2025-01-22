import React from "react";  
import './Register.css';



const RegistrationPage = () => {  
  return (  
    <div className="container">  
      {/* Left Image Section */}  
      <div className="image-section">  
        <div className="overlay">  
          {/* Corrected image path to use the public folder */}  
          <img src="/Assets/Reg_Img.jpeg"/>
        </div>  
      </div>  

      {/* Right Form Section */}  
      <div className="form-section">  
        <div className="form-frame">  
          <h2 className="system-title">SPORTS EQUIPMENT MANAGEMENT SYSTEM</h2>  
          <h1 className="form-heading">Create new account.</h1>  
          <p className="login-link">  
            Already a Member? <a href="#">Login</a>  
          </p>  
          <form>  
            <div className="form-group">  
              <input type="text" placeholder="First name" required />  
              <input type="text" placeholder="Last name" required />  
            </div>  
            <input type="text" placeholder="University ID" required />  
            <input type="tel" placeholder="Phone no" required />  
            <input type="email" placeholder="Email" required />  
            <input type="password" placeholder="Password" required />  
            <button type="submit">Register</button>  
          </form>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default RegistrationPage;