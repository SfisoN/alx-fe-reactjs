import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>My GitHub App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>

        <footer>
          <p>© 2025 My App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
