import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './dashboard2.css';

const Dashboard2 = () => {
  const navigate = useNavigate();  // Initialize useNavigate
  
  const items = {
    Cricket: [
      { name: 'Cricket Hard Ball Bat', count: 5 },
      { name: 'Cricket Hard Ball', count: 2 },
      { name: 'Football Net', count: 2 },
      { name: 'Netball Net', count: 2 },
    ],
  };

  // Handle navigation on "Add" button click
  const handleAddClick = () => {
    navigate('/dashboard3');  // Navigate to Dashboard3
  };

  return (
    <div className="main-content">
      <h1>Sports Items</h1>
      <div className="items-section">
        <h2>Cricket</h2>
        <div className="items-container">
          <div className="category">
            <h3>Items in use</h3>
            <ul>
              {items.Cricket.map((item, index) => (
                <li key={index}>
                  <span>{item.name}</span>
                  <span className="count-box">
                    <span className="count">{item.count}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="buttons">
              <button className="remove-button">Remove</button>
              <button className="add-button" onClick={handleAddClick}>Add</button> {/* Add onClick to navigate */}
            </div>
          </div>

          <div className="category">
            <h3>Damaged Items</h3>
            <ul>
              {items.Cricket.map((item, index) => (
                <li key={index}>
                  <span>{item.name}</span>
                  <span className="count-box">
                    <span className="count">{item.count}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="buttons">
              <button className="add-button" onClick={handleAddClick}>Add</button> {/* Add onClick to navigate */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
