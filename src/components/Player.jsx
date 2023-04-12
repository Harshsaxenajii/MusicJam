import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";

function Player(props) {
  const [song, newSong] = useState(props.musicLink);
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
  }, [audioElem?.current?.loadedmetada, audioElem?.current?.readyState]);

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
    return `${returnMin} : ${returnSec}`;
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrenttime(progressBar.current.value);
  };

  useEffect(() => {
    if (song != null) {
      audioElem.current.load();
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [song]);

  useEffect(() => {
    newSong(props.musicLink);
  }, [props.musicLink]);

  return (
    <div>
      <div className="player_button">
        {/* this is the prev button */}
        <div
          onClick={() =>
            props.setSongIndex(
              (props.currentSongIndex - 1) % props.songs.length
            )
          }
        >
          <BiSkipPreviousCircle />
        </div>

        {/* this is the play pause button */}
        <div
          className="playPause"
          onClick={changePlayPause}
          style={{ cursor: "pointer" }}
        >
          {isPlaying ? (
            <i>
              <AiOutlinePauseCircle />
            </i>
          ) : (
            <i>
              <AiOutlinePlayCircle />
            </i>
          )}
        </div>

        {/* this is the next button */}
        <div
          onClick={() =>
            props.setSongIndex(
              (props.currentSongIndex + 1) % props.songs.length
            )
          }
        >
          <BiSkipNextCircle />
        </div>
      </div>

      <div className="my-player">
        <audio ref={audioElem} preload="metadata">
          <source src={song} />
        </audio>
      </div>

      <img style={{ width: "200px" }} src={props.songsImg} alt="" />
      <input
        type="range"
        className="progressBar"
        ref={progressBar}
        defaultValue="0"
        onChange={changeProgress}
      />
      <div className="currentTime">{calculateTime(currentTime)}</div>
      <div className="duration">
        {duration && !isNaN(duration) && calculateTime(duration)
          ? duration && !isNaN(duration) && calculateTime(duration)
          : "00:00"}
      </div>
    </div>
  );
}

export default Player;
