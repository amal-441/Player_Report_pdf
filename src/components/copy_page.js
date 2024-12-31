import React from "react";
import Header from "../components/Header";
import Instruction from "../components/Instruction";
import DottedLine from "../components/DottedLine";
import PerformanceSummary from "./PerformanceSummary";
import { jsPDF } from "jspdf";

const PageOne = () => {
  const playerDetails = {
    name: "Yuva Swasthick - U16(M)",
    category: "100 m | 200 m | Long Jump",
    profileImage: "https://img.freepik.com/premium-photo/cute-little-angel-sitting-clouds-laughing-cheerfully_127093-3141.jpg?w=360",
  };

  const reportHeading = "Player Monthly Report";

  const instructions = `This month, you've improved your explosive starts and drive phase
  in the 100m but need to stay relaxed in the final stretch for better
  speed. In the 200m, your curve acceleration is strong, but there's
  room to push harder in the last 50 meters. For long jump, your
  approach and take-off have improved, but focus on driving your knees
  higher and extending your legs for better distance. Overall, solid
  progress across all events, and we'll keep refining your technique
  next month!`;

  const performanceData = [
    {
      event: "100m",
      highScore: "11.11s",
      avgScore: "11.35s",
      seasonBest: "11.25s",
      minScore: "11.50s",
      rank: { district: "01 / 368", state: "08 / 1852", national: "35 / 6854" },
    },
    {
      event: "200m",
      highScore: "22.12s",
      avgScore: "22.35s",
      seasonBest: "22.25s",
      minScore: "23.51s",
      rank: { district: "06 / 270", state: "12 / 1552", national: "43 / 5584" },
    },
    {
      event: "Long Jump",
      highScore: "7.25m",
      avgScore: "7.00m",
      seasonBest: "7.15m",
      minScore: "6.95m",
      rank: { district: "03 / 150", state: "10 / 500", national: "20 / 2000" },
    },
  ];

  const exportToPDF = () => {
    const pdf = new jsPDF();

    // Set Header
    pdf.setFontSize(16);
    pdf.text(reportHeading, 105, 20, { align: "center" });

    // Add Player Details Section
    pdf.setFontSize(12);
    pdf.text("Name:", 10, 40);
    pdf.text("Category:", 10, 50);
    pdf.text("Instructions:", 10, 70);

    // Editable Field: Name
    pdf.setFont("courier", "normal");
    pdf.text(playerDetails.name, 50, 40);

    // Editable Field: Category
    pdf.text(playerDetails.category, 50, 50);

    // Editable Field: Instructions
    pdf.setFontSize(10);
    const lines = pdf.splitTextToSize(instructions, 140);
    pdf.text(lines, 20, 80);

    // Create Editable Fields with AcroForms
    pdf.setFont("helvetica", "bold");
    pdf.text("Editable Fields", 10, 120);

    pdf.text("Name Field:", 10, 130);
    pdf.textField("nameField", {
      x: 50,
      y: 125,
      width: 100,
      height: 10,
      value: playerDetails.name,
    });

    pdf.text("Category Field:", 10, 150);
    pdf.textField("categoryField", {
      x: 50,
      y: 145,
      width: 100,
      height: 10,
      value: playerDetails.category,
    });

    pdf.text("Instructions Field:", 10, 170);
    pdf.textField("instructionsField", {
      x: 50,
      y: 165,
      width: 100,
      height: 30,
      multiline: true,
      value: instructions,
    });

    // Save the PDF
    pdf.save("Editable_Player_Report.pdf");
  };

  return (
    <div>
      <Header
        name={playerDetails.name}
        profileImage={playerDetails.profileImage}
        report_heading={reportHeading}
      />
      <Instruction text={instructions} />
      <DottedLine />
      <PerformanceSummary performanceData={performanceData} />
      <DottedLine />
      <button onClick={exportToPDF}>Download Editable PDF</button>
    </div>
  );
};

export default PageOne;
