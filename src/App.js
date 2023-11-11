import React, {useState} from 'react'
import {SinglyLinkedList} from './LinkedList'
import AddTrackForm from './AddTrackForm';
import Playlist from './Playlist'

const App = () => {
  const [playlist, setPlaylist] = useState(new SinglyLinkedList());

  const addTrackToPlaylist = (trackData) => {
    // Clone the current playlist and append the new track
    const newPlaylist = new SinglyLinkedList();
    newPlaylist.head = playlist.head;
    newPlaylist.append(trackData);
    setPlaylist(newPlaylist); // Update with the new instance that has the new track
  };

  const removeTrackFromPlaylist = (trackId) => {
    const newPlaylist = new SinglyLinkedList();
    newPlaylist.head = playlist.head;
    newPlaylist.removeById(trackId);
    setPlaylist(newPlaylist);
  };
  return (
    <div>
      <AddTrackForm onAddTrack={addTrackToPlaylist} />
      <Playlist playlist={playlist} onRemoveTrack={removeTrackFromPlaylist} />
    </div>
  );
}

export default App;