/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Heading, Button } from "../components";
import { StyleTrack, Album, SongList } from "./track.styled";

function Track(props) {
  return (
    <StyleTrack>
      <div className="album">
        <Heading className="heading">Discography</Heading>
        {props.albums.map(album => (
          <Album key={album.id}>
            <div className="name">{album.albumName}</div>
            <div className="circle" />
            <div className="year">{album.year}</div>
            <Button className="btn light" onClick={() => props.changeAlbum(album.id)}>
              Listen
            </Button>
            <Button className="btn dark">Buy</Button>
          </Album>
        ))}
      </div>
      <div className="songList">
        <div className="main-title">{props.currentAlbum.albumName}</div>
        {props.currentAlbum.tracks.map((track, index) => (
          <SongList key={track.id}>
            <div className="song">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className={props.trackId === track.id ? "svg active" : "svg"}
                width="9"
                height="9"
              >
                <polygon points="9 4, 0 9, 0,0" />
              </svg>
              <Button className="btnTrack" onClick={() => props.changeTrack(track.id)}>{`${
                index + 1 < 10 ? `0${index + 1}` : index + 1
              }. ${track.name}`}</Button>
            </div>
            <div className="time">
              <span className="dot" />
              <span>{track.duration}</span>
            </div>
          </SongList>
        ))}
      </div>
    </StyleTrack>
  );
}

export default Track;
