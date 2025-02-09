
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <div className="sidebar">
      <h2 className="brand">equipZone</h2>
      <ul className="menu">
        <li className="menu-item" onClick={() => navigate('/dashboard1')}>
          <span className="icon material-icons">dashboard</span> Dashboard
        </li>
        <li className="menu-item" onClick={() => navigate('/borrowed_items1')}>
          <span className="icon material-icons">assignment</span> Borrowed Items
        </li>
        <li className="menu-item" onClick={() => navigate('/remain_items1')}>
          <span className="icon material-icons">inventory</span> Remain Items
        </li>
      </ul>
      <div className="separator"></div>
      <button className="logout" onClick={() => navigate('/login')}>
        <span className="icon material-icons">logout</span> Logout
      </button>
    </div>
  );
};

export default Sidebar;
