import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Setting from "./Setting";
import Favourite from "./Favourite";

function index() {
  return (
    <Router>
      {/* this is the index page for dashboard where we have pages like - 1- setting 2-favourite songs and there profile  */}

      <Routes>
        <Route path="/dashboard/Setting" element={<Setting />} />
        <Route path="/dashboard/Favourite" element={<Favourite />} />
      </Routes>
    </Router>
  );
}

export default index;
