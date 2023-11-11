import React from 'react';

const Track = ({ track, onRemove }) => {
  return (
    <div>
      {track.title} by {track.artist}
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Track;
