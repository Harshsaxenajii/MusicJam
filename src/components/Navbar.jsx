import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { songs } from "../Songs";

function Navbar() {
  return (
    <div className="navbox">
      <div className="logo_box">
        <div className="main_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="logo_head">MusicJam</div>
      </div>

      <h5>Menu</h5>

      <Link className="navLinks" to="/">
        <ul>Home</ul>
      </Link>
      <Link className="navLinks" to="/dashboard">
        <ul>Dashboard</ul>
      </Link>
    </div>
  );
}

export default Navbar;
