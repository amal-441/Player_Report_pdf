import React from "react";

const BaseComponent = ({ children }) => {
  return (
    <div style={{ border: "2px solid #ccc", padding: "10px", margin: "10px" }}>
      <header style={{ backgroundColor: "#f4f4f4", padding: "10px" }}>
        <h1>Player Report</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default BaseComponent;
