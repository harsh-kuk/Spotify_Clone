import React from 'react';

const Playlists = () => {
  const playlists = ["Playlist 1", "Playlist 2", "Playlist 3"];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Playlists</h1>
      <ul>
        {playlists.map((playlist, index) => (
          <li key={index} className="mb-2">{playlist}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
