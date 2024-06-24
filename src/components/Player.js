import React from 'react';

const Player = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white flex justify-between items-center">
      <div>Now Playing: Song Title</div>
      <div>
        <button className="mr-2">Prev</button>
        <button className="mr-2">Play</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Player;
