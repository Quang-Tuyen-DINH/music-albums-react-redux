import React, { useState, useEffect } from 'react';
import { fetchAlbumsData } from "../../model/albums";
import Album from "../../components/album/album";
import AlbumDetails from "../../interfaces/albumDetails";
import "./favoriteList.scss";

function FavoriteList() {
  const [albumsData, setData] = useState([]);

  const fetchData = async() => {
    await fetchAlbumsData().then((result) => {
      setData(result);
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div id="favoriteHeader">
        <h2 id="favoriteTitle">Favorites</h2>
      </div>
      <div id="favoriteContainer">
        {albumsData.map((album: AlbumDetails) => (
          <Album key={album.id.attributes['im:id']} album={album}/>
        ))}
      </div>
    </div>
  );
}

export default FavoriteList
