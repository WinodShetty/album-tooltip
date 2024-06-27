import React from 'react';
import { Tooltip } from 'react-tooltip';  // Correct the import statement
import './App.css';

function AlbumCard() {
  return (
    <div className="album-card">
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/classic-song-mixtape-album-cover-template-design-3ba3255137894fac49ae81b1346b289e_screen.jpg?ts=1635384548"
        alt="Album Art"
        data-tip
        data-for="albumTooltip"
      />
      <div className="album-info">
        <span>12417 Follows</span>
        <h3>Lighthearted Childhood</h3>
      </div>
      <Tooltip id="albumTooltip" place="top" effect="solid">
        42 songs
      </Tooltip>
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
