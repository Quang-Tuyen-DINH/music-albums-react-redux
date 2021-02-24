import React, { useState, useEffect } from 'react';
import { fetchAlbumsData } from "../../model/albums";
import Album from "../album/album";
import AlbumDetails from "../../interfaces/albumDetails";
import "./searchBar.scss";

function SearchBar() {
  const [albumsData, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchData = async() => {
    await fetchAlbumsData().then((result) => {
      setData(result);
    })
  };

  useEffect(() => {
    fetchData()
  }, []);

  const handleChange = (event: any) => {
    setFilter(event.target.value);
  };
  const lowercasedFilter: string = filter.toLowerCase();
  const filteredData: Array<AlbumDetails> = albumsData.filter((object: AlbumDetails) => {
    return Object.keys(object).some((key: string) =>
      object['title'].label.toString().toLowerCase().includes(lowercasedFilter)
    );
  });

  return (
    <div>
      <div className="wrap">
        <div id="inputBar">
          <input type="text" className="searchTerm" value={filter} onChange={handleChange} placeholder="Search"/>
        </div>
      </div>
      <div id="searchResult">
        {filteredData.map((album: AlbumDetails) => (
          <Album key={album.id.attributes['im:id']} album={album} type={'ADD_FVR_ALBUM'}/>
        ))}
      </div>
    </div>
  )
};

export default SearchBar;
