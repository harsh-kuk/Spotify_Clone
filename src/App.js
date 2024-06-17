import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Playlist from './components/Playlist';
import Search from './components/Search';
import Player from './components/Player';
import Album from './components/Album';
import Genre from './components/Genre';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/playlist/:id" component={Playlist} />
            <Route path="/search" component={Search} />
            <Route path="/album/:id" component={Album} />
            <Route path="/genre/:name" component={Genre} />
          </Routes>
        </main>
        <Player />
      </div>
    </Router>
  );
}

export default App;
