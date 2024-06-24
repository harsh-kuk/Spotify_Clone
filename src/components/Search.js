import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${query}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for music..."
        className="p-2 border rounded mb-2"
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">Search</button>
    </div>
  );
};

export default Search;
