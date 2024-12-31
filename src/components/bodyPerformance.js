import React from "react";
import {
  FaRunning,
  FaLungs,
  FaArrowsAltV,
  FaRuler,
  FaStopwatch,
  FaExchangeAlt,
  FaDumbbell,
  FaBolt,
} from "react-icons/fa";

const BodyPerformance = () => {
  const performanceData = [
    {
      icon: <FaRunning size={30} />,
      label: "Speed (s)",
      test: "40 m Sprint",
      value: "8.2",
      status: "Bad",
      statusColor: "red",
      improvement: "+12%",
      improvementColor: "green",
      range: "4 - 7",
    },
    {
      icon: <FaArrowsAltV size={30} />,
      label: "Vertical Jump (cm)",
      test: "High Jump",
      value: "53",
      status: "Good",
      statusColor: "green",
      improvement: "+2%",
      improvementColor: "green",
      range: "20 - 70",
    },
    {
      icon: <FaRuler size={30} />,
      label: "Flexibility (cm)",
      test: "Sit & Reach",
      value: "32",
      status: "Good",
      statusColor: "green",
      improvement: "-1%",
      improvementColor: "red",
      range: "0 - 40",
    },
    {
      icon: <FaStopwatch size={30} />,
      label: "Response Time (ms)",
      test: "Reaction Test",
      value: "250",
      status: "Good",
      statusColor: "green",
      improvement: "+1%",
      improvementColor: "green",
      range: "200 - 300",
    },
    {
      icon: <FaLungs size={30} />,
      label: "Endurance (Lit)",
      test: "Spirometry Test",
      value: "3.2",
      status: "Good",
      statusColor: "green",
      improvement: "+2%",
      improvementColor: "green",
      range: "2.5 - 4.0",
    },
    {
      icon: <FaExchangeAlt size={30} />,
      label: "Agility (s)",
      test: "T-Test",
      value: "10",
      status: "Good",
      statusColor: "green",
      improvement: "+2%",
      improvementColor: "green",
      range: "8 - 12",
    },
    {
      icon: <FaDumbbell size={30} />,
      label: "Core Strength (s)",
      test: "Plank Test",
      value: "252",
      status: "Good",
      statusColor: "green",
      improvement: "+3.1%",
      improvementColor: "green",
      range: "30 - 300",
    },
    {
      icon: <FaBolt size={30} />,
      label: "Reaction Time (ms)",
      test: "Flash Test",
      value: "150",
      status: "Good",
      statusColor: "green",
      improvement: "+2%",
      improvementColor: "green",
      range: "120 - 180",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
      }}
    >
      {/* Column 1 */}
      <div style={{ flex: 1 }}>
        {performanceData.slice(0, 4).map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div style={{ color: "#333" }}>{item.icon}</div>
              <div>
                <h4 style={{ margin: "0", fontSize: "16px" }}>{item.label}</h4>
                <p style={{ margin: "0", fontSize: "12px", color: "#888" }}>{item.test}</p>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <h4 style={{ margin: "0", fontSize: "20px" }}>{item.value}</h4>
              <p style={{ margin: "0", fontSize: "12px", color: item.statusColor }}>
                {item.status}
              </p>
              <p style={{ margin: "0", fontSize: "12px", color: item.improvementColor }}>
                {item.improvement}
              </p>
              <p style={{ margin: "0", fontSize: "10px", color: "#888" }}>{item.range}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Column 2 */}
      <div style={{ flex: 1 }}>
        {performanceData.slice(4).map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div style={{ color: "#333" }}>{item.icon}</div>
              <div>
                <h4 style={{ margin: "0", fontSize: "16px" }}>{item.label}</h4>
                <p style={{ margin: "0", fontSize: "12px", color: "#888" }}>{item.test}</p>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <h4 style={{ margin: "0", fontSize: "20px" }}>{item.value}</h4>
              <p style={{ margin: "0", fontSize: "12px", color: item.statusColor }}>
                {item.status}
              </p>
              <p style={{ margin: "0", fontSize: "12px", color: item.improvementColor }}>
                {item.improvement}
              </p>
              <p style={{ margin: "0", fontSize: "10px", color: "#888" }}>{item.range}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyPerformance;
