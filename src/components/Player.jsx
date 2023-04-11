import React, { useEffect, useRef, useState } from "react";

function Player(props) {
  const audioElem = useRef(null);
  const [song, newSong] = useState(props.musicLink);
  useEffect(() => {
    if (song) {
      audioElem.current.load();
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [song]);

  useEffect(() => {
    newSong(props.musicLink);
  }, [props.musicLink]);

  const playSong = () => {
    audioElem.current.play();
    console.log("play");
  };
  const pauseSong = () => {
    audioElem.current.pause();
    console.log("pause");
  };
  return (
    <div>
      <button
        onClick={() =>
          props.setSongIndex((props.currentSongIndex - 1) % props.songs.length)
        }
      >
        prev
      </button>
      <button
        onClick={() =>
          props.setSongIndex((props.currentSongIndex + 1) % props.songs.length)
        }
      >
        next
      </button>
      <button onClick={playSong}>play</button>
      <button onClick={pauseSong}>pause</button>
      <div className="my-player">
        <audio ref={audioElem} controls autoPlay="true">
          <source src={song} />
        </audio>
      </div>
    </div>
  );
}

export default Player;
