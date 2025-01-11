import React, { useState } from "react";
import './dashboard3.css';



function Dashboard3() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Equipment Name:", name);
    console.log("Quantity:", quantity);
  };

  return (
    <div className="main-content">
      <h1>Sports Items</h1>
      <div className="box-container">
        <h3>Cricket</h3>
        <div className="content">
          <div className="form-container">
            <h4>Detail about the equipment</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Quantity"
                  required
                />
              </div>
              <button type="submit" className="save-button">Save</button>
            </form>
          </div>
          <div className="image-container">
            <img
              src="https://via.placeholder.com/250" /* Replace with your image URL */
              alt="Cricket Player"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard3;
