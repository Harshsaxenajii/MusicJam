import React, { useEffect, useRef, useState } from "react";

function Player(props) {
  const audioRef = useRef();
  const [song] = useState(props.musicLink);
  console.log(song);

  useEffect(() => {
    updateSong();
  }, [song]);

  const updateSong = (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  };
  return (
    <div>
      <audio controls autoPlay="true" ref={audioRef}>
        <source src={song} />
      </audio>
    </div>
  );
}

export default Player;
