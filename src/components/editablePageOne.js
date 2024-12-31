import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DottedLine from "../components/DottedLine";
import PerformanceSummary from "./PerformanceSummary";

const EditPageOne = ({ instructions, setInstructions }) => {
  const [tempInstructions, setTempInstructions] = useState(instructions); // Local state for editing
  const navigate = useNavigate();

  // Player Details and Data
  const playerDetails = {
    name: "Yuva Swasthick - U16(M)",
    category: "100 m | 200 m | Long Jump",
    profileImage: "https://img.freepik.com/premium-photo/cute-little-angel-sitting-clouds-laughing-cheerfully_127093-3141.jpg?w=360",
  };

  const reportHeading = "Player Monthly Report";

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

  const handleSave = () => {
    setInstructions(tempInstructions); // Update the parent state
    navigate("/"); // Redirect to PageOne
  };

  return (
    <div>
      {/* Header Section */}
      <Header
        name={playerDetails.name}
        profileImage={playerDetails.profileImage}
        report_heading={reportHeading}
      />
      
      {/* Editable Instructions Section */}
      <div style={{ margin: "20px 0" }}>
        <h3>Edit Instructions</h3>
        <textarea
          value={tempInstructions}
          onChange={(e) => setTempInstructions(e.target.value)}
          rows="5"
          cols="50"
          style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        />
      </div>

      {/* Dotted Line */}
      <DottedLine />

      {/* Performance Section */}
      <h2 style={{ marginTop: "20px" }}>Performance Summary</h2>
      <PerformanceSummary performanceData={performanceData} />

      {/* Save and Cancel Buttons */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          
        </button>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditPageOne;
