import React, { useState, useRef, useEffect } from "react";
import { StylePlayer, Image, AudioPlayer, Title, Button } from "./player.styled";

function Player() {
  let [music, setMusic] = useState("play");
  let [progressBar, setProgressBar] = useState(4);

  let audioRef = useRef();
  let sliderRef = useRef();

  const handleMusicPlay = option => {
    if (option === "play") {
      setMusic("pause");
      audioRef.current.play();
    } else {
      setMusic("play");
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", e => {
      const track = Math.floor(
        sliderRef.current.offsetWidth * (e.target.currentTime / e.target.duration)
      );
      if (progressBar + 1 === sliderRef.current.offsetWidth) {
        console.log("SFs");
        setProgressBar(4);
        audioRef.current.currentTime = 0;
        setMusic("play");
      } else setProgressBar(track);
    });
    return () => {
      audioRef.current.removeEventListener("timeupdate", () => {});
    };
  });
  return (
    <StylePlayer>
      <Image>
        <img className="image" src={`${process.env.PUBLIC_URL}/img/cd.png`} alt="cd" />
      </Image>
      <AudioPlayer width={`${progressBar}px`}>
        <div className="heading">Now playing</div>
        <Title>
          <div>Surprise without flaws</div>
          <div className="sub-title">01. Clouds in the forest</div>
        </Title>
        <div className="audio">
          <audio ref={audioRef} preload="auto">
            <source
              src="https://dl.dropbox.com/s/oswkgcw749xc8xs/The-Noisy-Freaks.mp3?dl=1"
              type="audio/mp3"
            />
            <source
              src="https://dl.dropbox.com/s/75jpngrgnavyu7f/The-Noisy-Freaks.ogg?dl=1"
              type="audio/ogg"
            />
          </audio>

          <div className="controls">
            <Button>
              <svg className="step-backward" width="38" height="38" viewBox="0 0 25 25">
                <g>
                  <polygon points="4.9,4.3 9,4.3 9,11.6 21.4,4.3 21.4,20.7 9,13.4 9,20.7 4.9,20.7" />
                </g>
              </svg>
            </Button>
            {music === "play" ? (
              <Button onClick={() => handleMusicPlay("play")}>
                <svg className="play" width="38" height="38" viewBox="0 0 25 25">
                  <defs>
                    <rect x="-49.5" y="-132.9" width="446.4" height="366.4" />
                  </defs>
                  <g>
                    <circle fill="none" cx="12.5" cy="12.5" r="10.8" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.7,6.9V18c0,0,0.2,1.4,1.8,0l8.1-4.8c0,0,1.2-1.1-1-2L9.8,6.5 C9.8,6.5,9.1,6,8.7,6.9z"
                    />
                  </g>
                </svg>
              </Button>
            ) : (
              <Button onClick={() => handleMusicPlay("pause")}>
                <svg className="pause" width="38" height="38" viewBox="0 0 25 25">
                  <g>
                    <rect x="6" y="4.6" width="3.8" height="15.7" />
                    <rect x="14" y="4.6" width="3.9" height="15.7" />
                  </g>
                </svg>
              </Button>
            )}

            <Button>
              <svg className="step-foreward" width="38" height="38" viewBox="0 0 25 25">
                <g>
                  <polygon points="20.7,4.3 16.6,4.3 16.6,11.6 4.3,4.3 4.3,20.7 16.7,13.4 16.6,20.7 20.7,20.7" />
                </g>
              </svg>
            </Button>
          </div>

          <div ref={sliderRef} className="slider">
            <div className="elapsed" />
          </div>
        </div>
      </AudioPlayer>
    </StylePlayer>
  );
}

export default Player;
