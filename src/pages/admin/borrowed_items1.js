import React from 'react';
import { useNavigate } from 'react-router-dom';
import './borrowed_items1.css';

const borrowedItemsData = {
  cricket: [
    { name: 'Normal Bat', quantity: 3 },
    { name: 'Normal Cricket Ball', quantity: 2 },
    { name: 'Batting Gloves', quantity: 2 },
    { name: 'Wicketkeeping Pads', quantity: 1 },
    { name: 'Batting Pads', quantity: 1 },
    { name: 'Cricket Hard Ball', quantity: 4 },
    { name: 'Helmet (with Grill)', quantity: 1 },
  ]
};

const BorrowedItems1 = () => {
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    // Navigate to BorrowedItems2 and pass item name as a parameter
    navigate('/borrowed_items2', { state: { selectedItem: itemName } });
  };

  return (
    <div className="borrowed-items-container">
      <h2 className="title">Borrowed Items (Overall)</h2>
      <div className="items-table">
        {borrowedItemsData.cricket.map((item, index) => (
          <div
            key={index}
            className="item-row"
            onClick={() => handleItemClick(item.name)}
            style={{ cursor: 'pointer' }}
          >
            <span className="item-name">{item.name}</span>
            <span className="item-quantity">{item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedItems1;
