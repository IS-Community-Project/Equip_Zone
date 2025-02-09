import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'; // useLocation to access the passed state
import "./remain_items2.css"; // Link to the CSS file
import runnerup from "../../assets/runnerup.png"; // Path to the image

const RemainItems2 = () => {
  const location = useLocation(); // Get the location object
  const { item } = location.state || {}; // Extract the item from the state, or default to an empty object

  useEffect(() => {
    // Disable scrolling on this page using JavaScript
    document.body.style.overflow = 'hidden';

    // Clean up by resetting overflow when the component is unmounted
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="reserve-container">
      
    </div>
  );
};

export default RemainItems2;

