import React, { useState, useEffect } from 'react'
import { fetchAlbumsData } from "../../model/albums"
import Album from "../../components/album/album"
import AlbumDetails from "../../interfaces/albumDetails"

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
    <div className="App">
      {albumsData.map((album: AlbumDetails) => (
        <Album key={album.id.attributes['im:id']} album={album}/>
      ))}
    </div>
  );
}

export default AlbumList
