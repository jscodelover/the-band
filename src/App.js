import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAlbums, getCurrentTrack, getCurrentAlbum } from "./store/action";
import Header from "./header/Header";
import Player from "./player/Player";
import Track from "./track/Track";

function App(props) {
  useEffect(() => {
    props.getAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {props.albums.length && (
        <>
          <Header
            track={props.currentAlbum.tracks.find(track => track.id === props.currentTrack)}
          />
          <Player trackId={props.currentTrack} currentAlbum={props.currentAlbum} />
          <Track
            changeAlbum={id => props.getCurrentAlbum(id)}
            trackId={props.currentTrack}
            albums={props.albums}
            currentAlbum={props.currentAlbum}
            changeTrack={id => props.getCurrentTrack(id)}
          />
        </>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentAlbum: state.currentAlbum,
    currentTrack: state.currentTrack,
    albums: state.albums
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbums: () => dispatch(getAlbums()),
    getCurrentTrack: id => dispatch(getCurrentTrack(id)),
    getCurrentAlbum: id => dispatch(getCurrentAlbum(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
