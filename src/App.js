import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageOne from "./components/PageOne";

const App = () => {
  return (
    <Router>
      <nav style={{ margin: "20px" }}>
        <Link to="/page-one" style={{ textDecoration: "none", fontSize: "20px", color: "blue" }}>
          Go to Page One
        </Link>
      </nav>
      <Routes>
        {/* Define the route for PageOne */}
        <Route path="/page-one" element={<PageOne />} />
      </Routes>
    </Router>
  );
};

export default App;
