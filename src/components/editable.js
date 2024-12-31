import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const ExportPageOnePDF = ({ playerDetails, instructions, performanceData }) => {
  const pdfRef = useRef(); // Reference to the content to export

  const handleExportPDF = async () => {
    const element = pdfRef.current;

    if (!element) return;

    try {
      // Use html2canvas to convert HTML to a canvas
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      // Create a jsPDF instance
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Save the PDF
      pdf.save(`${playerDetails.name}_Monthly_Report.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div>
      {/* PDF Content */}
      <div ref={pdfRef} style={{ padding: "20px", background: "white" }}>
        <h1>{playerDetails.name}</h1>
        <h2>{playerDetails.category}</h2>
        <h3>{instructions}</h3>

        {performanceData.map((data, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h4>{data.event}</h4>
            <p>High Score: {data.highScore}</p>
            <p>Average Score: {data.avgScore}</p>
            <p>Season Best: {data.seasonBest}</p>
            <p>Minimum Score: {data.minScore}</p>
            <p>
              Rank: District - {data.rank.district}, State - {data.rank.state},
              National - {data.rank.national}
            </p>
          </div>
        ))}
      </div>

      {/* Export Button */}
      <button onClick={handleExportPDF}>Export to PDF</button>
    </div>
  );
};

export default ExportPageOnePDF;
