import React, { useState } from 'react';
import './borrowed_items2.css';

const BorrowedItems2 = () => {
  const initialData = [
    { id: 1, regNo: '20######', name: 'Nimal Perera', faculty: 'Computing', amount: 1 },
    { id: 2, regNo: '20######', name: 'Kamal Perera', faculty: 'Computing', amount: 2 },
    { id: 3, regNo: '20######', name: 'Amal Perera', faculty: 'Computing', amount: 1 },
    { id: 4, regNo: '20######', name: 'Nimal Fernando', faculty: 'Computing', amount: 1 },
  ];

  // State to track the current borrowed items list
  const [borrowedItems, setBorrowedItems] = useState(initialData);

  const handleRemove = (id) => {
    // Filter out the removed item
    const updatedItems = borrowedItems.filter(item => item.id !== id);
    setBorrowedItems(updatedItems);

    // TODO: Remove from the database
    // fetch('/api/removeBorrowedItem', {
    //   method: 'POST',
    //   body: JSON.stringify({ id }),
    //   headers: { 'Content-Type': 'application/json' }
    // });
  };

  return (
    <div className="content">
      <h1>Borrowed items</h1>
      <h2>Normal Bats</h2>
      <table>
        <thead>
          <tr>
            <th>Registration No</th>
            <th>Name of the Student</th>
            <th>Faculty</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrowedItems.length > 0 ? (
            borrowedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.regNo}</td>
                <td>{item.name}</td>
                <td>{item.faculty}</td>
                <td>{item.amount}</td>
                <td>
                  <button className="remove" onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">No borrowed items left</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedItems2;
