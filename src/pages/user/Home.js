import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#borrowed-items">Borrowed Items</a></li>
          <li><a href="#remaining-items">Remaining Items</a></li>
          <li className="right"><a href="#login">Login</a></li>
          <li className="right"><a href="#signup">Signup</a></li>
        </ul>
      </header>
      
      <div className="image-section">
        <img src="image.png" alt="Group Activity" />
      </div>

      <div className="details-section">
        <div className="opening-hours">
          <h3>Opening Hours</h3>
          <table>
            <tbody>
              <tr><td>Monday</td><td></td></tr>
              <tr><td>Tuesday</td><td></td></tr>
              <tr><td>Wednesday</td><td></td></tr>
              <tr><td>Thursday</td><td></td></tr>
              <tr><td>Friday</td><td></td></tr>
              <tr><td>Saturday</td><td></td></tr>
              <tr><td>Sunday</td><td></td></tr>
            </tbody>
          </table>
        </div>

        <div className="contact-info">
          <div className="person-card">
            <img src="director-image.png" alt="Director" />
            <p><strong>Director</strong></p>
            <p>Mr.V.Lakmal</p>
            <p>078-8976543</p>
          </div>
          <div className="person-card">
            <img src="assistant-manager-image.png" alt="Assistant Manager" />
            <p><strong>Assistant Manager</strong></p>
            <p>Mrs.M Mahesha</p>
            <p>070-8976543</p>
          </div>
          <div className="person-card">
            <img src="technical-officer-image.png" alt="Technical Officer" />
            <p><strong>Technical Officer</strong></p>
            <p>Mr.V.S.Silva</p>
            <p>076-8976543</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
