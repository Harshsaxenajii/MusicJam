import React, { useState } from "react";
import search_logo from "../Images/search.png";
import user_logo from "../Images/logo.png";
import { songs } from "../Songs";
import { Link } from "react-router-dom";

function TopNav(props) {
  const [currSearch, setCurrSearch] = useState("");
  const [user, setUser] = useState(false);
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
          <div className="fullSearchDiv">
            {currSearch.length != 0 &&
              songs
                .filter(({ name }) => {
                  const newName = name.toLowerCase();
                  const currName = currSearch.toLowerCase();
                  return newName.includes(currName);
                })
                .map((song) => (
                  <div
                    onClick={() => props.handleClick(song.id)}
                    className="searchDiv"
                  >
                    {/* <div></div> */}
                    <img className="favImg" src={song.cover} alt="" />
                    <div>{song.name}</div>
                  </div>
                ))}
          </div>
        </div>
        <div className="user_info">
          {user && <span>Harsh</span>}
          {!user && (
            <Link to="/login">
              <button className="topnav_link">Login</button>
            </Link>
          )}
          {!user && (
            <Link to="/signup">
              <button className="topnav_link">Signup</button>
            </Link>
          )}

          <div className="user_logo_box">
            <img src={user_logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
