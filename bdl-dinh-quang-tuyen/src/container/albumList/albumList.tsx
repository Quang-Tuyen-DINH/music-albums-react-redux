import React, { useState, useEffect } from 'react';
import { fetchAlbumsData } from "../../model/albums";
import Album from "../../components/album/album";
import AlbumDetails from "../../interfaces/albumDetails";
import "./albumList.scss";

function AlbumList() {
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
      <h2 id="listTitle">Top 100 Albums</h2>
      <div className="listContainer">
        {albumsData.map((album: AlbumDetails) => (
          <Album key={album.id.attributes['im:id']} album={album}/>
        ))}
      </div>
    </div>
  );
}

export default AlbumList
