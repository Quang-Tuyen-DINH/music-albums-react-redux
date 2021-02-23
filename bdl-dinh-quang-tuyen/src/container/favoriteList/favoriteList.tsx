import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Album from "../../components/album/album";
import AlbumDetails from "../../interfaces/albumDetails";
import State from "../../interfaces/state"
import "./favoriteList.scss";

function FavoriteList() {
  const fvrAlbums = useSelector((state: State) => state.fvrAlbums);
  
  const dispatch = useDispatch();

  return (
    <div>
      <div id="favoriteHeader">
        <h2 id="favoriteTitle">Favorites</h2>
      </div>
      <div id="favoriteContainer">
        {fvrAlbums.map((album: AlbumDetails) => (
          <div>
            <Album key={album.id.attributes['im:id']} album={album} fvrAlbums={fvrAlbums}/>
				    <button type="button"  onClick={() => dispatch({ type:"DELETE_FVR_ALBUM", payload: album})}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteList
