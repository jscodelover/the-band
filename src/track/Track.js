import React from "react";
import { Heading, Title } from "../components";
import { StyleTrack, Album, SongList, Button } from "./track.styled";

function Track() {
  return (
    <StyleTrack>
      <div className="album">
        <Heading className="heading">Discography</Heading>
        <Album>
          <div className="name">surprise witout flaws</div>
          <div className="circle" />
          <div className="year">2015</div>
          <Button className="light">Listen</Button>
          <Button className="dark">Buy</Button>
        </Album>
        <Album>
          <div className="name">surprise witout flaws dkjdf</div>
          <div className="circle" />
          <div className="year">2015</div>
          <Button className="light">Listen</Button>
          <Button className="dark">Buy</Button>
        </Album>
        <Album>
          <div className="name">surprise witout flaws</div>
          <div className="circle" />
          <div className="year">2015</div>
          <Button className="light">Listen</Button>
          <Button className="dark">Buy</Button>
        </Album>
      </div>
      <div className="songList">
        <div className="main-title">Surprise without flaws</div>
        <SongList>
          <div className="song">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="svg"
              width="9"
              height="9"
            >
              <polygon points="9 4, 0 9, 0,0" />
            </svg>
            <span>01. Clouds in the forest</span>
          </div>
          <div className="time">
            <span className="dot" />
            <span>3:20</span>
          </div>
        </SongList>
        <SongList>
          <div className="song">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="svg"
              width="9"
              height="9"
            >
              <polygon points="9 4, 0 9, 0,0" />
            </svg>
            <span>01. Clouds in the forest</span>
          </div>
          <div className="time">
            <span className="dot" />
            <span>3:20</span>
          </div>
        </SongList>
      </div>
    </StyleTrack>
  );
}

export default Track;
