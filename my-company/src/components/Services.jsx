import React from "react";

function Services() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "2.25rem", marginBottom: "20px" }}>
        Our Services
      </h1>
      <ul
        style={{ fontSize: "1.125rem", lineHeight: "1.8", paddingLeft: "20px" }}
      >
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
