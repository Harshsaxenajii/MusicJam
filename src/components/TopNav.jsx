import React, { useState } from "react";
import search_logo from "../Images/search.png";
import user_logo from "../Images/logo.png";
import { songs } from "../Songs";

function TopNav(props) {
  const [currSearch, setCurrSearch] = useState();
  return (
    <div>
      <div className="newNav">
        <div className="search_bar">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setCurrSearch(e.target.value)}
          />
          <button className="search_button">
            <img src={search_logo} alt="search" />
          </button>
          {songs
            .filter(({ name }) => {
              const newName = name.toLowerCase();
              return newName.includes(currSearch);
            })
            .map((song) => (
              <div
                onClick={() => props.setSongIndex(song.id)}
                className="searchDiv "
              >
                <img className="favImg" src={song.cover} alt="" />
                <div>{song.name}</div>
              </div>
            ))}
        </div>
        <div className="user_info">
          <span>Harsh</span>
          <div className="user_logo_box">
            <img src={user_logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
