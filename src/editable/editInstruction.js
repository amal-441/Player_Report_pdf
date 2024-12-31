import React from "react";

const EditInstruction = ({ text, setText }) => {
  return (
    <div style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <h3
        style={{
          fontStyle: "italic",
          fontWeight: "normal",
          textAlign: "left",
          fontSize: "18px",
          margin: "10px 0",
        }}
      >
        Instructions by Coach <strong style={{ fontWeight: "bold" }}>Sivasankar</strong>
      </h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          textAlign: "left",
          border: "1px solid #ccc",
          marginLeft: "16%",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          margin: "10px 0",
          width: "80%",
          maxWidth: "1000px",
          height: "100px",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default EditInstruction;
