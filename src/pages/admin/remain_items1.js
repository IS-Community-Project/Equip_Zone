import React, { useState } from 'react';
import './RemainItems1.css';

// SearchBar Component
const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value); // Call the onSearch function passed as prop
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search items..."
        className="search-input"
      />
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

const RemainItems1 = () => {
  // Hardcoded data (to be replaced with backend API data)
  const items = {
    Cricket: [
      { name: 'Cricket Hard Ball Bat', count: 5 },
      { name: 'Cricket Hard Ball', count: 2 },
      { name: 'Football Net', count: 2 },
      { name: 'Netball Net', count: 2 },
    ],
    Netball: [
      { name: 'Cricket Hard Ball Bat', count: 5 },
      { name: 'Cricket Hard Ball', count: 2 },
      { name: 'Football Net', count: 2 },
      { name: 'Netball Net', count: 2 },
    ],
  };

  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter items based on search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Function to filter items by search query
  const filterItems = (items) => {
    if (!searchQuery) return items; // No filter applied
    return items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="remain-items">
      <h1>Remain Sports Items</h1>
      <p className="availability">Availability (Remain)</p>

      {/* Search Bar Component */}
      <SearchBar onSearch={handleSearch} />

      <div className="items-container">
        {Object.keys(items).map((category) => (
          <div className="category-box" key={category}>
            <h3>{category}</h3>
            {filterItems(items[category]).map((item, index) => (
              <div className="item" key={index}>
                <span>{item.name}</span>
                <span className="count">{item.count}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemainItems1;