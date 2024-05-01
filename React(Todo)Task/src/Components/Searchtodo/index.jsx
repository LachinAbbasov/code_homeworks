import React from 'react';

const SearchTodo = ({ onSearch }) => {
  const handleSearch = (e) => {
    const term = e.target.value;
    onSearch(term);
  };

  return (
    <div className='search-container'>
      <input
        className='search-input'
        type="text"
        placeholder="Search todo..."
        onChange={handleSearch} 
      />
    </div>
  );
};

export default SearchTodo;

