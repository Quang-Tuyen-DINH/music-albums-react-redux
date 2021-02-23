import { type } from "os";
import * as types from "./constants";

const initialState = {
  fvrAlbums: []
};

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case types.ADD_FVR_ALBUM:
      return {
        ...state,
        fvrAlbums: action.payload
      };
      case types.DELETE_FVR_ALBUM:
        return {
          ...state,
          fvrAlbums: action.payload
        };
    default:
      return state;
  }
}

export default reducer;