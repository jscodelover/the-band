import { data } from "../Data";
import { getAlbumTrack } from "./operation";

export const actionType = {
  GET_ALBUMS: "GET_ALBUMS",
  GET_CURRENT_TRACK: "GET_CURRENT_TRACK"
};

export function getAlbums() {
  return {
    type: actionType.GET_ALBUMS,
    payload: data
  };
}

export function getCurrentTrack(id) {
  return {
    type: actionType.GET_CURRENT_TRACK,
    payload: getAlbumTrack(id, data)
  };
}
