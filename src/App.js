import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAlbums, getCurrentTrack } from "./store/action";
import Header from "./header/Header";
import Player from "./player/Player";
import Track from "./track/Track";

function App(props) {
  useEffect(() => {
    props.getAlbums();
  });
  return (
    <div>
      <Header />
      <Player />
      <Track albums={props.albums} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentTrack: state.currentTrack,
    albums: state.albums
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbums: () => dispatch(getAlbums()),
    getCurrentTrack: () => dispatch(getCurrentTrack())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
