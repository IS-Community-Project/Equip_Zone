import React from 'react';
import './sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="brand">equipZone</h2>
      <ul className="menu">
        <li className="menu-item active">
          <span className="icon material-icons">dashboard</span> Dashboard
        </li>
        <li className="menu-item">
          <span className="icon material-icons">assignment</span> Borrowed Items
        </li>
        <li className="menu-item">
          <span className="icon material-icons">inventory</span> Remain Items
        </li>
      </ul>
      <div className="separator"></div>
      <button className="logout">
        <span className="icon material-icons">logout</span> Logout
      </button>
    </div>
  );
};

export default Sidebar;