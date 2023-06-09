import React, { useEffect, useRef, useState } from "react";
import { BsPauseCircle, BsPlayCircle, BsHeart } from "react-icons/bs";
import { BsSkipForwardCircle, BsSkipBackwardCircle } from "react-icons/bs";

function Player({ song, image, name, singer, auto }) {
  const [isPlaying, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);
  const audioElem = useRef();
  const animationRef = useRef();
  const progressBar = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioElem.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioElem?.current?.loadedmetada, audioElem?.current?.readyState, song]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioElem.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioElem.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changeProgress = () => {
    audioElem.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const whilePlaying = () => {
    progressBar.current.value = audioElem.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin}:${returnSec}`;
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrenttime(progressBar.current.value);
  };

  return (
    <div className="playerDiv">
      <img style={{ width: "60%" }} src={image} alt="" />
      <div>
        <div className="song_name">{name}</div>
        <div className="artist">{singer}</div>
      </div>

      <div className="my-player">
        <audio ref={audioElem} preload="metadata" src={song} autoPlay />
      </div>

      <div className="looper">
        <div className="time currentTime">{calculateTime(currentTime)}</div>
        <input
          type="range"
          className="progressBar"
          ref={progressBar}
          defaultValue="0"
          onChange={changeProgress}
        />
        <div className="time duration">
          {duration && !isNaN(duration) && calculateTime(duration)
            ? duration && !isNaN(duration) && calculateTime(duration)
            : "Loading..."}
        </div>
      </div>

      <div className="player_button">
        {/* this is the prev button */}
        <div
        // onClick={() =>
        //   props.setSongIndex(
        //     (props.currentSongIndex - 1) % props.songs.length
        //   )
        // }
        >
          <BsSkipBackwardCircle className="smallLogo" />
        </div>

        {/* this is the play pause button */}
        <div
          className="playPause"
          onClick={changePlayPause}
          style={{ cursor: "pointer" }}
        >
          {isPlaying ? (
            <i>
              <BsPauseCircle className="Logo" />
            </i>
          ) : (
            <i>
              <BsPlayCircle className="Logo" />
            </i>
          )}
        </div>

        {/* this is the next button */}
        <div
        // onClick={() =>
        //   props.setSongIndex(
        //     (props.currentSongIndex + 1) % props.songs.length
        //   )
        // }
        >
          <BsSkipForwardCircle className="smallLogo" />
        </div>
      </div>
    </div>
  );
}

export default Player;
