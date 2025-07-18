import React from "react";

function About() {
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
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ fontSize: "2.25rem", marginBottom: "20px" }}>About Us</h1>
      <p style={{ fontSize: "1.125rem" }}>
        Our company has been providing top-notch services since 1990. We
        specialize in various fields including technology, marketing, and
        consultancy.
      </p>
    </div>
  );
}

export default About;
