import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

function Navbar() {
  return (
    <div className="navbox">
      <div className="logo_box">
        <div className="main_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="logo_head">
        MusicJam
        </div>
      </div>

      <h5>Menu</h5>

      <Link className="navLinks" to="/">
        <ul>Home</ul>
      </Link>
      <Link className="navLinks" to="/login">
        <ul>Login</ul>
      </Link>
      <Link className="navLinks" to="/signup">
        <ul>Signup</ul>
      </Link>
      <Link className="navLinks" to="/dashboard">
        <ul>Dashboard</ul>
      </Link>
    </div>
  );
}

export default Navbar;
