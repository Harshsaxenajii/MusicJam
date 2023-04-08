import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Index from "./Pages/Dashboard/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ChooseIndex = () => {
  if (
    window.location.pathname === "/dashboard/setting" ||
    window.location.pathname === "/dashboard/favourite"
  ) {
    return <Index />;
  } else {
    return <App />;
  }
};

root.render(
  <React.StrictMode>
    {console.log(window.location.pathname)}
    {/* <App /> */}
    <ChooseIndex />
  </React.StrictMode>
);
