import React from 'react';
import { useParams } from 'react-router-dom';
import { mockAlbums } from '../mockData';

const Album = () => {
  const { id } = useParams();
  const album = mockAlbums.find((a) => a.id.toString() === id);

  return (
    <div className="Album">
      <h1>{album.name}</h1>
      <ul>
        {album.songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default Album;
