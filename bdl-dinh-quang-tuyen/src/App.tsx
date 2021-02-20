import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchAlbumsData } from "./model/albums"

interface Album {
  category: {
    attributes: {
      ['im:id']: string;
      label: string;
      scheme: string;
      term: string
    };
  };
  id: {
    attributes: {
      ['im:id']: string;
    };
    label: string;
  };
  ['im:artist']: {
    attributes: {
      href: string;
    };
    label: string;
  };
  ['im:contentType']: {
    attributes: {
      term: string;
      label: string;
    };
    ['im:contentType']: {
      attributes: {
        term: string;
        label: string;
      }
    };
  };
  ['im:image']: Array<{
    label: string;
  }>;
  ['im:itemCount']: {
    label: string;
  };
  ['im:name']: {
    label: string;
  };
  ['im:price']: {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    }
  };
  ['im:releaseDate']: {
    attributes: {
      label: string;
    };
    label: string;
  };
  link: {
    attributes: {
      href: string;
      rel: string;
      type: string;
    }
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
}

function App() {
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
      <h1>This is App.js</h1>
      {console.log(albumsData)}
      {albumsData.map((album: Album, index) => (
        <div key={index}>
          <h4>Artist: {album['im:artist'].label}</h4>
          <h4>album: {album['im:name'].label}</h4>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default App;
