import React from 'react';
import './borrowed_items1.css'; // Importing the CSS file
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


const BorrowedItems = () => {
  const borrowedData = [
    { name: 'Normal Bat', count: 3 },
    { name: 'Cricket Hardball Bat', count: 4 },
    { name: 'Normal Cricket Ball', count: 2 },
    { name: 'Cricket Hard Ball', count: 1 },
    { name: 'Football', count: 2 },
    { name: 'Football Net', count: 1 },
    { name: 'Netball', count: 1 },
    { name: 'Netball Net', count: 1 },
  ];

  return (
    <div className="borrowed-container">
      
       
      
      <main className="main-content">
        <h1>Borrowed items</h1>
        <div className="borrowed-section">
          <h2>Cricket</h2>
          <div className="borrowed-card">
            <h3>Borrowed items (Over-all)</h3>
            <div className="items-grid">
              {borrowedData.map((item, index) => (
                <div className="item-card" key={index}>
                  <div>{item.name}</div>
                  <div className="item-count">{item.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BorrowedItems;

