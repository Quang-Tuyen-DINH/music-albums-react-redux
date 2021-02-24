import React from 'react';
import { useSelector } from 'react-redux';
import Album from "../../components/album/album";
import AlbumDetails from "../../interfaces/albumDetails";
import State from "../../interfaces/state";
import "./favoriteList.scss";

function FavoriteList() {
  const fvrAlbums = useSelector((state: State) => state.fvrAlbums);

  return (
    <div>
      <div id="favoriteHeader">
        <h2 id="favoriteTitle">Favorites</h2>
      </div>
      <div id="favoriteContainer">
        {fvrAlbums.map((album: AlbumDetails) => (
          <div className="fvrAlbum">
            <Album key={album.id.attributes['im:id']} album={album} type={"DELETE_FVR_ALBUM"}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
