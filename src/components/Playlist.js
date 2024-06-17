import React from 'react';
import { useParams } from 'react-router-dom';
import { mockPlaylists } from '../mockData';

const Playlist = () => {
  const { id } = useParams();
  const playlist = mockPlaylists.find((p) => p.id.toString() === id);

  return (
    <div className="Playlist">
      <h1>{playlist.name}</h1>
      <ul>
        {playlist.songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
