import * as types from "./constants";
import AlbumDetails from "../interfaces/albumDetails"

const initialState = {
  fvrAlbums: []
};

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case types.ADD_FVR_ALBUM:
      return {
        ...state,
        fvrAlbums: state.fvrAlbums.findIndex((album: AlbumDetails) => album.id.attributes['im:id'] === action.payload.id.attributes['im:id']) >= 0 ? state.fvrAlbums : state.fvrAlbums.concat(action.payload)
      };
      case types.DELETE_FVR_ALBUM:
        return {
          ...state,
          fvrAlbums: state.fvrAlbums.filter((album: AlbumDetails) => album !== action.payload)
        };
    default:
      return state;
  }
}

export default reducer;