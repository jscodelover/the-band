import { actionType } from "./action";

const INITIAL_STATE = {
  currentTrack: {},
  albums: []
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionType.GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
        currentTrack: action.payload[0]
      };
    case actionType.GET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
