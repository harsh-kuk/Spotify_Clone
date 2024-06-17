import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="Sidebar">
      <h2>Spotify Clone</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/genre/Pop">Pop</Link></li>
          <li><Link to="/genre/Rock">Rock</Link></li>
          {/* Add more genres as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
