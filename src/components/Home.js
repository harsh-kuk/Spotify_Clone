import React from 'react';
import { Link } from 'react-router-dom';
import { mockPlaylists, mockAlbums } from '../mockData';

const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <section>
        <h2>Playlists</h2>
        <ul>
          {mockPlaylists.map((playlist) => (
            <li key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Albums</h2>
        <ul>
          {mockAlbums.map((album) => (
            <li key={album.id}>
              <Link to={`/album/${album.id}`}>{album.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
