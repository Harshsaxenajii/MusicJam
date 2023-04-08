import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <Link to="/">
          <ul>Home</ul>
        </Link>
        <Link to="/login">
          <ul>Login</ul>
        </Link>
        <Link to="/signup">
          <ul>Signup</ul>
        </Link>
        <Link to="/dashboard">
          <ul>Dashboard</ul>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
