import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";

import "./index.css";

function Kanbas() {
  return (
    <div className="d-flex Kanbas">
      <div className="col-1">
        <KanbasNavigation />
      </div>
      <div className="col-11">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;