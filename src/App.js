import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Playlists from './components/Playlists';
import Search from './components/Search';
import Player from './components/Player';
import Albums from './components/Albums';
import Genres from './components/Genres';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-gray-800 p-4 text-white flex justify-around">
          <Link to="/" className="text-lg">Home</Link>
          <Link to="/playlists" className="text-lg">Playlists</Link>
          <Link to="/search" className="text-lg">Search</Link>
          <Link to="/albums" className="text-lg">Albums</Link>
          <Link to="/genres" className="text-lg">Genres</Link>
        </nav>
        <div className="p-4">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/playlists" component={Playlists} />
            <Route path="/search" component={Search} />
            <Route path="/albums" component={Albums} />
            <Route path="/genres" component={Genres} />
          </Routes>
        </div>
        <Player />
      </div>
    </Router>
  );
}

export default App;
