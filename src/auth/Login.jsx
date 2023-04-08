import React from "react";
import "./Login.css"
import { loginEndpoint } from "../spotify";

function Login() {
  return (
    <div className="login_main">
      <a href={loginEndpoint}>
        <div>login</div>
      </a>
    </div>
  );
}

export default Login;
