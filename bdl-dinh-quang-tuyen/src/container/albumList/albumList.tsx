import SearchBar from "../../components/searchBar/searchBar"
import "./albumList.scss";

function AlbumList() {

  return (
    <div>
      <div id="listHeader">
        <h2 id="listTitle">Top 100 Albums</h2>
      </div>
      <div id="searchBar">
        <SearchBar />
      </div>
    </div>
  );
}

export default AlbumList
