import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/profiles")
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home profiles={profiles} />} />
      </Routes>
    </Router>
  );
}


export default App;
