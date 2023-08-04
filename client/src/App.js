import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BestBooks from "./Components/Bestbooks";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav className="nav">
        <p className="paragraph">Book Store</p>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<BestBooks />}></Route>
      </Routes>
    </Router>
    
  );
};

export default App;
