import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#f8f9fa",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>
        My Company
      </div>
      <div>
        <Link
          to="/"
          style={{
            marginRight: "1.5rem",
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            marginRight: "1.5rem",
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{
            marginRight: "1.5rem",
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
