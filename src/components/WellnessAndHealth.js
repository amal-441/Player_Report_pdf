import React from "react";
import {
  FaTint,
  FaBed,
  FaHeartbeat,
  FaTemperatureHigh,
  FaTachometerAlt,
  FaLungs,
  FaSyringe,
} from "react-icons/fa";
import "./WellnessAndHealth.css";

const WellnessAndHealth = () => {
  return (
    <div className="wellness-container">
      <div className="attendance-title-bar" style={{ width: '80%',height:'20%', margin: '0 auto' }}>
              <h3 className="attendance-title">Health & Wealth</h3>
        </div>

      {/* First Row: Hydration, Sleep, Heartbeat, and Temperature */}
      <div className="wellness-grid">
        <div
          className="hydration-sleep"
          style={{ width: "250px", marginLeft: "-60px" }}
        >
          <div className="metric-list">
            <div className="metric-item">
              <FaTint className="metric-icon" />
              <div className="metric-name">Hydration %</div>
              <div className="metric-value">60</div>
            </div>
            <div className="metric-item">
              <FaBed className="metric-icon" />
              <div className="metric-name">Sleep %</div>
              <div className="metric-value">72</div>
            </div>
          </div>
          <div className="double-ring-chart">
            <svg className="circle-svg" viewBox="0 0 36 36">
              <path
                className="outer-ring"
                d="M18 2.0845
                   a 15.9155 15.9155 0 1 1 0 31.831
                   a 15.9155 15.9155 0 1 1 0 -31.831"
                strokeDasharray="60, 100"
              />
              <path
                className="inner-ring"
                d="M18 7.0845
                   a 10.9155 10.9155 0 1 1 0 21.831
                   a 10.9155 10.9155 0 1 1 0 -21.831"
                strokeDasharray="72, 100"
              />
            </svg>
          </div>
        </div>

        {/* Heart Rate Metric */}
        <div className="metric-card" style={{ width: "300px",height:'300px' }}>
          <FaHeartbeat className="metric-icon-large" />
          <h3>Heart Beat (bpm)</h3>
          <div className="chart bar-chart" style={{ width: "200px", height: "200px" }}>
            <svg className="bar-graph" viewBox="0 0 200 120">
              <line x1="20" y1="10" x2="20" y2="110" stroke="#ccc" strokeWidth="1" />
              <line x1="20" y1="110" x2="190" y2="110" stroke="#ccc" strokeWidth="1" />
              <text x="5" y="15" fontSize="8" fill="#555">
                100
              </text>
              <text x="5" y="60" fontSize="8" fill="#555">
                60
              </text>
              <text x="5" y="110" fontSize="8" fill="#555">
                0
              </text>
              {Array.from({ length: 12 }).map((_, i) => {
                const height = i % 2 === 0 ? 50 : 70;
                const color = i % 2 === 0 ? "teal" : "#ff007f";
                return (
                  <rect
                    key={i}
                    x={30 + i * 14}
                    y={110 - height}
                    width="10"
                    height={height}
                    fill={color}
                  />
                );
              })}
            </svg>
          </div>
          <p className="status">Normal</p>
        </div>

        {/* Temperature Metric */}
        <div className="metric-card" style={{width :'350px'}}>
          <FaTemperatureHigh className="metric-icon-large" />
          <h3>Temperature (°F)</h3>
    <svg viewBox="0 0 320 120" className="temperature-chart">
      {/* X and Y Axes */}
      <line x1="10" y1="10" x2="10" y2="110" stroke="#ccc" strokeWidth="1" />
      <line x1="10" y1="110" x2="310" y2="110" stroke="#ccc" strokeWidth="1" />

      {/* Labels for Y-Axis */}
      <text x="5" y="20" fontSize="10" fill="#888">99</text>
      <text x="5" y="60" fontSize="10" fill="#888">97</text>
      <text x="5" y="110" fontSize="10" fill="#888">95</text>

      {/* Temperature Line */}
      <path
        d="M10 100 L60 90 L110 95 L160 85 L210 70 L260 75 L310 60"
        fill="none"
        stroke="orange"
        strokeWidth="2"
      />

      {/* Data Points */}
      {[ 
        { cx: 10, cy: 100 }, 
        { cx: 60, cy: 90 }, 
        { cx: 110, cy: 95 }, 
        { cx: 160, cy: 85 }, 
        { cx: 210, cy: 70 }, 
        { cx: 260, cy: 75 }, 
        { cx: 310, cy: 60 },
      ].map((point, index) => (
        <circle
          key={index}
          cx={point.cx}
          cy={point.cy}
          r="3"
          fill="orange"
        />
      ))}
    </svg>
  
  <p className="status" style={{ color: "green", fontWeight: "bold" }}>
    Normal -11%
  </p>
        </div>
      </div>

      {/* Second Row: Blood Pressure, Blood Oxygen, Blood Sugar */}
      <div className="wellness-grid">
        <div className="metric-card" style={{ width: "300px", padding: "20px" }}>
  <FaTachometerAlt className="metric-icon-large" />
  <h3>Blood Pressure (mmHg)</h3>
  <div className="chart bar-chart" style={{ marginTop: "10px", overflow: "visible" }}>
    <svg viewBox="0 0 320 150" className="blood-pressure-chart">
      {/* Axes */}
      <line x1="30" y1="10" x2="30" y2="130" stroke="#ccc" strokeWidth="1" />
      <line x1="30" y1="130" x2="310" y2="130" stroke="#ccc" strokeWidth="1" />

      {/* Labels for Y-Axis */}
      <text x="5" y="20" fontSize="10" fill="#888">140</text>
      <text x="5" y="70" fontSize="10" fill="#888">100</text>
      <text x="5" y="130" fontSize="10" fill="#888">60</text>

      {/* Bars (Systolic and Diastolic) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const systolicHeight = i % 2 === 0 ? 80 : 90; // Alternating heights for systolic
        const diastolicHeight = i % 2 === 0 ? 60 : 70; // Alternating heights for diastolic
        return (
          <g key={i}>
            {/* Systolic (Blue) */}
            <rect
              x={40 + i * 20}
              y={130 - systolicHeight}
              width="8"
              height={systolicHeight}
              fill="blue"
              opacity="0.8"
            />
            {/* Diastolic (Transparent Blue) */}
            <rect
              x={50 + i * 20}
              y={130 - diastolicHeight}
              width="8"
              height={diastolicHeight}
              fill="blue"
              opacity="0.4"
            />
          </g>
        );
      })}

      {/* Labels for X-Axis */}
      {Array.from({ length: 12 }).map((_, i) => (
        <text
          key={i}
          x={45 + i * 20}
          y="145"
          fontSize="8"
          fill="#555"
          textAnchor="middle"
        >
          {i % 2 === 0 ? "Systolic" : "Diastolic"}
        </text>
      ))}
    </svg>
  </div>
  <p className="status" style={{ color: "#555", fontWeight: "bold", marginTop: "10px" }}>
    120/80 mmHg
  </p>
</div>
<div className="metric-card" style={{ width: "300px" }}>
  <FaLungs className="metric-icon-large" />
  <h3>Blood Oxygen (%)</h3>
  
    <svg viewBox="0 0 320 150" className="blood-oxygen-chart">
      {/* X and Y Axes */}
      <line x1="20" y1="10" x2="20" y2="130" stroke="#ccc" strokeWidth="1" />
      <line x1="20" y1="130" x2="300" y2="130" stroke="#ccc" strokeWidth="1" />

      {/* Labels for Y-Axis */}
      <text x="5" y="20" fontSize="10" fill="#888">100</text>
      <text x="5" y="70" fontSize="10" fill="#888">90</text>
      <text x="5" y="130" fontSize="10" fill="#888">80</text>

      {/* Oxygen Line (Rose Color - #FF007F) */}
      <path
        d="M20 110 
           L60 85 
           L100 70 
           L140 95 
           L180 80 
           L220 90 
           L260 75 
           L300 80"
        fill="none"
        stroke="#FF007F"
        strokeWidth="2"
      />

      {/* Data Points */}
      {[
        { cx: 20, cy: 110 }, // Start point
        { cx: 60, cy: 85 },
        { cx: 100, cy: 70 },
        { cx: 140, cy: 95 },
        { cx: 180, cy: 80 },
        { cx: 220, cy: 90 },
        { cx: 260, cy: 75 },
        { cx: 300, cy: 80 }, // End point
      ].map((point, index) => (
        <circle key={index} cx={point.cx} cy={point.cy} r="3" fill="#FF007F" />
      ))}

      {/* Rightmost Label (98) */}
      <text
        x="300"
        y="140"
        fontSize="10"
        fill="#FF007F"
        fontWeight="bold"
        textAnchor="middle"
      >
        98
      </text>
    </svg>
  <p className="status" style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
    Normal - 12%
  </p>
</div>
        <div className="metric-card" style={{ width: "300px" }}>
          <FaSyringe className="metric-icon-large" />
          <h3>Blood Sugar (mg/dL)</h3>
          <svg viewBox="0 0 320 150" className="blood-sugar-chart">
      {/* Y-Axis */}
      <line x1="30" y1="10" x2="30" y2="140" stroke="#ccc" strokeWidth="1" />
      {/* Labels for Y-Axis */}
      <text x="10" y="130" fontSize="10" fill="#888">70</text>
      <text x="10" y="90" fontSize="10" fill="#888">100</text>
      <text x="10" y="50" fontSize="10" fill="#888">140</text>

      {/* X-Axis */}
      <line x1="30" y1="140" x2="300" y2="140" stroke="#ccc" strokeWidth="1" />

      {/* Bars */}
      {[
        80, 110, 100, 140, 130, 90, 120, 100, 115, 125, 105, 110, // Heights of the bars
      ].map((value, index) => (
        <rect
          key={index}
          x={35 + index * 20}
          y={140 - value} // Position based on value
          width="10"
          height={value} // Height proportional to value
          fill="#4A90E2"
        />
      ))}
    </svg></div>
          <p className="status">110</p>
        </div>
        <div className="attendance-title-bar" style={{ width: '80%',height:'20%', margin: '0 auto' }}>
              <h3 className="attendance-title">Performance</h3>
        </div>
        
    </div>

  );
};

export default WellnessAndHealth;
