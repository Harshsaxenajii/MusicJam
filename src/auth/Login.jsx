import React from "react";
import { loginEndpoint } from "../spotify";

function Login() {
  return (
    <div>
      <a href={loginEndpoint}>
        <div>login</div>
      </a>
    </div>
  );
}

export default Login;
