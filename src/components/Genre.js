import React from 'react';

const Genres = () => {
  const genres = ["Rock", "Pop", "Hip-hop", "Jazz"];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Genres</h1>
      <ul>
        {genres.map((genre, index) => (
          <li key={index} className="mb-2">{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
