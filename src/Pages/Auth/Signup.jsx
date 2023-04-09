import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import il1 from "./img/image1.png";
import "./Login.css";

function Signup() {
  const [name, setName]=useState("");
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
              className="sign-up-form"
            >
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="heading">
                <h2>Get Started</h2>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                    onChange={e=>setName(e.target.value)}
                  />
                  
                  {!name&&<label>Name</label>}
                </div>
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                    onChange={e=>setUsername(e.target.value)}
                  />
                  
                  {!userName&&<label>UserName</label>}
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                    onChange={e=>setPassword(e.target.value)}
                  />
                  {!password&&<label>Password</label>}
                </div>
              <button className="sign-btn">Signup</button>
                <div className="toggleinfo">
                  <spam className="text text-account">
                  Already have an account?
                    </spam>
                  <Link to="/login" className="toggle">
                     Log In
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

export default Signup;
