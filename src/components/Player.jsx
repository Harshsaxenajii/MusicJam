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
  return (
    <div>
      <audio ref={audioElem} controls autoPlay="true">
        <source src={song} />
      </audio>
    </div>
  );
}

export default Player;
