import React from 'react';
import { useParams } from 'react-router-dom';

const Genre = () => {
  const { name } = useParams();
  return (
    <div className="Genre">
      <h1>{name} Music</h1>
      {/* Implement genre-specific content here */}
    </div>
  );
};

export default Genre;
