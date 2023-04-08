import React, { useEffect, useState } from "react";

function Player(props) {
  return (
    <div>
      <audio controls autoPlay="true">
        <source src={props.musicLink} />
      </audio>
    </div>
  );
}

export default Player;
