import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Header from "../components/Header";
import DottedLine from "../components/DottedLine";
import AttendanceSummary from "./Regularity";

const PageTwo = () => {
  const playerDetails = {
    name: "Yuva Swasthick - U16(M)",
    category: "100 m | 200 m | Long Jump",
    profileImage: "https://img.freepik.com/premium-photo/cute-little-angel-sitting-clouds-laughing-cheerfully_127093-3141.jpg?w=360",
  };

  const reportHeading = "Player Regularity Report"; // Example report heading
  const attendanceDetails = {
    totalDays: "22.5 / 25",
    sessions: "22 / 25",
    trainingSessions: "45 / 50",
    performanceTrials: "03 / 04",
    totalBreaks: 5,
  };

  const calendarData = [
    { day: "1", events: [], special: "black-circle" },
    { day: "2", events: ["performance-trial", "morning-training"] },
    { day: "3", events: ["evening-training"] },
    { day: "4", events: ["morning-training"] },
    { day: "5", events: ["performance-trial"] },
    { day: "6", events: ["morning-training", "evening-training"] },
    { day: "7", events: ["morning-training", "evening-training"] },
    { day: "8", events: [], special: "black-circle" },
    { day: "9", events: ["morning-training", "evening-training"] },
    { day: "10", events: ["morning-training", "evening-training"] },
    { day: "11", events: ["morning-training", "evening-training"] },
    { day: "12", events: ["break"] },
    { day: "13", events: ["morning-training"] },
    { day: "14", events: ["morning-training", "evening-training"] },
    { day: "15", events: [], special: "black-circle" },
    { day: "16", events: ["morning-training", "evening-training"] },
    { day: "17", events: ["morning-training", "evening-training"] },
    { day: "18", events: [] },
    { day: "19", events: ["performance-trial"] },
    { day: "20", events: ["morning-training", "evening-training"] },
    { day: "21", events: ["morning-training", "evening-training"] },
    { day: "22", events: [], special: "black-circle" },
    { day: "23", events: ["morning-training"] },
    { day: "24", events: ["evening-training"] },
    { day: "25", events: ["break"] },
    { day: "26", events: ["evening-training"] },
    { day: "27", events: ["performance-trial"] },
    { day: "28", events: ["evening-training"] },
    { day: "29", events: [], special: "black-circle" },
    { day: "30", events: ["absent"] },
    { day: "1", events: [], isNextMonth: true },
    { day: "2", events: [], isNextMonth: true },
    { day: "3", events: [], isNextMonth: true },
    { day: "4", events: [], isNextMonth: true },
    { day: "5", events: [], isNextMonth: true },
  ];

  const downloadPDF = async () => {
    const element = document.body; // Capture the whole webpage
    const canvas = await html2canvas(element, { scale: 1.5 }); // Slightly higher scale for better clarity
    const imgData = canvas.toDataURL("image/jpeg", 0.7); // Use JPEG format with 70% quality

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const scaleFactor = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);

    const pdfWidth = imgWidth * scaleFactor;
    const pdfHeight = imgHeight * scaleFactor;

    // Center the image horizontally
    const xOffset = (pageWidth - pdfWidth) / 2;

    pdf.addImage(imgData, "JPEG", xOffset, 0, pdfWidth, pdfHeight);
    pdf.save("Player_Regularity_Report.pdf"); // Saves the PDF file directly
  };

  return (
    <div>
      <Header
        name={playerDetails.name}
        profileImage={playerDetails.profileImage}
        report_heading={reportHeading}
      />
      <DottedLine />
      <div>
        <AttendanceSummary
          attendanceDetails={attendanceDetails}
          calendarData={calendarData}
        />
      </div>
      <DottedLine />
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default PageTwo;
