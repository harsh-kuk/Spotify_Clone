import React from 'react';

const Albums = () => {
  const albums = ["Album 1", "Album 2", "Album 3"];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Albums</h1>
      <ul>
        {albums.map((album, index) => (
          <li key={index} className="mb-2">{album}</li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
