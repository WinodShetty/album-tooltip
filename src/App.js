import React from 'react';
import ReactTooltip from 'react-tooltip';
import './App.css';

function AlbumCard() {
  return (
    <div className="album-card">
      <img
        src="https://via.placeholder.com/150"
        alt="Album Art"
        data-tip
        data-for="albumTooltip"
      />
      <div className="album-info">
        <span>12417 Follows</span>
        <h3>Lighthearted Childhood</h3>
      </div>
      <ReactTooltip id="albumTooltip" place="top" effect="solid">
        42 songs
      </ReactTooltip>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AlbumCard />
    </div>
  );
}

export default App;
