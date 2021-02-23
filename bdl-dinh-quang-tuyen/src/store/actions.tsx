import * as types from './constants';
import albumDetails from "../interfaces/albumDetails"

export const addFvrAlbum = (album: albumDetails) => {
  return ({
    type: types.ADD_FVR_ALBUM,
    payload: album,
  });
};

export const deleteFvrAlbum = (album: albumDetails) => {
  return ({
    type: types.DELETE_FVR_ALBUM,
    payload: album,
  });
};