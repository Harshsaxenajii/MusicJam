import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
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
    </div>
  );
}

export default Navbar;
