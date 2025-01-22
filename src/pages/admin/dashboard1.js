import React from 'react';
import './Dashboard1.css';


const Dashboard1 = () => {
  const sportsItems = [
    { name: 'Cricket', image: 'path-to-cricket-image.png' },
    { name: 'Netball', image: 'path-to-netball-image.png' },
    { name: 'Football', image: 'path-to-football-image.png' },
    { name: 'Badminton', image: 'path-to-badminton-image.png' },
    { name: 'Table Tennis', image: 'path-to-table-tennis-image.png' },
    { name: 'Athletics', image: 'path-to-athletics-image.png' },
  ];

  
  return (
    <div className="dashboard">
      <div className="header">
        <div className="title">
          <h2>Sports Items</h2>
          <p className="availability">Availability (over-all)</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search items..." />
        </div>
      </div>
      <div className="sports-grid">
        {sportsItems.map((item, index) => (
          <div className="sports-item" key={index}>
            <div className="name-box">{item.name}</div>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard1;
