export function getAlbumTrack(id, data) {
  return data.find(album => album.id === id);
}
