import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div>
      <Router>
        <div className="mainDiv">
          <div className="mainNav">
            <Navbar />
          </div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
