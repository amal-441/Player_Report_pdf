import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DottedLine from "../components/DottedLine";
import EditPerformanceSummary from "../editable/EditPerformance";


const EditPageOne = ({ instructions, setInstructions }) => {
  const [tempInstructions, setTempInstructions] = useState(instructions); // Local state for editing
  const navigates = useNavigate();

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

  const [dateRange1, setDateRange1] = useState("Sep 01 - Sep 15");


  const handleSave = () => {
    setInstructions(tempInstructions); // Update the parent state
    navigates("/", { state: { dateRange1 } }); // Redirect to PageOne
  };

  return (
    <div>
      <Header
        name={playerDetails.name}
        profileImage={playerDetails.profileImage}
        report_heading={reportHeading}
      />
      <div>
        <h3>Edit Instructions</h3>
        {/* Editable Textarea for Instructions */}
        <textarea
          value={tempInstructions}
          onChange={(e) => setTempInstructions(e.target.value)}
          rows="10"
          cols="50"
          style={{
            width: "80%", // Increased width to span the container
            height: "70px", // Reduced height
            padding: "10px", // Added padding for better appearance
            fontSize: "16px", // Adjusted font size for readability
          }}
        />
      </div>
      <DottedLine />
      <EditPerformanceSummary performanceData={performanceData} dateRange1={dateRange1} setDateRange1={setDateRange1} />
      <DottedLine />
      {/* Save and Cancel Buttons */}
      <button onClick={handleSave}>Save</button>
      <button onClick={() => navigates("/")}>Cancel</button>
    </div>
  );
};

export default EditPageOne;
