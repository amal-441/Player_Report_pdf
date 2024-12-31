import React, { useState } from "react";
import { jsPDF } from "jspdf";

const EditableInstructionPage = ({ initialText, onSave }) => {
  const [instructions, setInstructions] = useState(initialText);

  const handleSave = () => {
    // Pass updated instructions back to parent
    onSave(instructions);

    // Generate an updated PDF
    const pdf = new jsPDF();
    pdf.setFontSize(16);
    pdf.text("Player Monthly Report", 105, 20, { align: "center" });

    pdf.setFontSize(12);
    pdf.text("Instructions:", 10, 40);

    const lines = pdf.splitTextToSize(instructions, 180);
    pdf.text(lines, 10, 50);

    pdf.save("Updated_Player_Report.pdf");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Instructions</h2>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        style={{
          width: "100%",
          height: "150px",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        onClick={handleSave}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Save and Download PDF
      </button>
    </div>
  );
};

export default EditableInstructionPage;
