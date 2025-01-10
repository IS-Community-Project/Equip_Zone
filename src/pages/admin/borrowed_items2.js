import React from 'react';


const BorrowedItems = () => {
  const data = [
    { id: 1, regNo: '20######', name: 'Nimal Perera', faculty: 'Computing', amount: 1 },
    { id: 2, regNo: '20######', name: 'Kamal Perera', faculty: 'Computing', amount: 2 },
    { id: 3, regNo: '20######', name: 'Amal Perera', faculty: 'Computing', amount: 1 },
    { id: 4, regNo: '20######', name: 'Nimal Fernando', faculty: 'Computing', amount: 1 },
  ];

  const handleRemove = (id) => {
    console.log(`Removed item with id: ${id}`);
  };

  return (
    <div className="content">
      <h1>Borrowed items</h1>
      <h2>Normal Bats</h2>
      <table>
        <thead>
          <tr>
            <th>Registration No</th>
            <th>Name of the student</th>
            <th>Faculty</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedItems;
