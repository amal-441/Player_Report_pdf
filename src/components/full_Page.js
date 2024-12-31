import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PageOne from "./PageOne"; // Import PageOne
import PageTwo from "./PageTwo"; // Import PageTwo
import PageFour from "./PageFour"; // Import PageFour

const FullPage = () => {
  const fullPageRef = useRef(null);

  const downloadPDF = async () => {
    const element = fullPageRef.current;

    // Get all child elements (each page component)
    const pages = Array.from(element.children);

    // Create a new PDF
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Iterate over each page
    for (let i = 0; i < pages.length; i++) {
      const pageElement = pages[i];

      // Capture the current page
      const canvas = await html2canvas(pageElement, {
        scale: 2, // Increase quality
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Calculate the ratio to fit the page
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgScaledWidth = imgWidth * ratio;
      const imgScaledHeight = imgHeight * ratio;

      // Add image to PDF
      if (i !== 0) {
        pdf.addPage(); // Add a new page for each webpage
      }
      pdf.addImage(imgData, "PNG", 0, 0, imgScaledWidth, imgScaledHeight);
    }

    // Save the PDF
    pdf.save("FullPage.pdf");
  };

  return (
    <div>
      {/* Container for all pages */}
      <div ref={fullPageRef} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <PageOne />
        <PageTwo />
        <PageFour />
      </div>

      {/* Button to trigger PDF download */}
      <button
        onClick={downloadPDF}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Download Full Page PDF
      </button>
    </div>
  );
};

export default FullPage;
