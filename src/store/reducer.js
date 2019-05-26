import { actionType } from "./action";

const INITIAL_STATE = {
  currentTrack: {},
  currentAlbum: {},
  albums: []
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionType.GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
        currentAlbum: action.payload[0],
        currentTrack: action.payload[0].tracks[0].id
      };
    case actionType.GET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.payload
      };
    case actionType.GET_CURRENT_ALBUM:
      return {
        ...state,
        currentAlbum: action.payload,
        currentTrack: action.payload.tracks[0].id
      };
    default:
      return state;
  }
}

export default reducer;
