import React, { useState } from 'react';
import { mockPlaylists, mockAlbums } from '../mockData';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const allItems = [...mockPlaylists, ...mockAlbums];
    const filteredResults = allItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="Search">
      <h1>Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
