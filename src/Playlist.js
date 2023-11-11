import React from 'react';
import Track from './Track';

const Playlist = ({ playlist, onRemoveTrack }) => {
  const tracksArray = playlist.toArray();

  return (
    <div>
      {tracksArray.map((track) => (
        <Track key={track.id} track={track} onRemove={() => onRemoveTrack(track.id)} />
      ))}
    </div>
  );
};

export default Playlist;
