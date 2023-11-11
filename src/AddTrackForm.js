import React, { useState } from 'react';

const AddTrackForm = ({ onAddTrack }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTrack({ id: Date.now(), title, artist });
    setTitle('');
    setArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Track title" />
      <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist" />
      <button type="submit">Add Track</button>
    </form>
  );
};

export default AddTrackForm;
