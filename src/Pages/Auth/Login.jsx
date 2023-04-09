import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import il1 from "./img/image1.png";
import "./Login.css";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bigBox">
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action="index.html"
              autoComplete="off"
              className="sign-in-form"
            >
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="heading">
                <h2>MusicJam</h2>
                <h3>Welcomes You</h3>
                <h6>Listne to your favourite music</h6>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  {!userName && <label>Name</label>}
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!password && <label>Password</label>}
                </div>
                <button className="sign-btn">Login</button>
                <button className="sign-btn skip-btn">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow"
                  >
                    <path d="m8.625 5.25 6.75 6.75-6.75 6.75"></path>
                  </svg>
                </button>
                <p className="text">
                  Forgotten your password or you login datails?
                  <a href="#">Get help</a> signing in
                </p>
                <div className="toggleinfo">
                  <spam className="text text-account">
                    Don't have an account yet?
                  </spam>
                  <Link to="/signup" className="toggle">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="gallery">
            <div className="images-wrapper">
              <img src={il1} className="image" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
