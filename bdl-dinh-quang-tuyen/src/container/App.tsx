import React from 'react';
import './App.scss';
import AlbumList from "./albumList/albumList";
import FavoriteList from "./favoriteList/favoriteList";

function App() {
  return (
    <div className="App">
      <div id="albumList">
        <AlbumList />
      </div>
      <div id="sidebar">
        <FavoriteList />
      </div>
    </div>
  );
};

export default App;
