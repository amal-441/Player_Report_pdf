import React from "react";
import "./RegularitySummary.css"; // Add styles here if needed
import DashboardGraphs from "./dashboardGraph";
import DottedLine from "./DottedLine";

const AttendanceSummary = ({ attendanceDetails,calendarData  }) => {
  const {
    totalDays,
    sessions,
    trainingSessions,
    performanceTrials,
    totalBreaks,
  } = attendanceDetails;


  
  return (
    <div className="attendance-summary">
       <div className="attendance-title-bar" style={{ width: '80%',height:'20%', margin: '0 auto' }}>
              <h3 className="attendance-title">Attendance</h3>
        </div>
      <div className="attendance-grid">
        <div className="attendance-item">
          <h3>Total Days</h3>
          <p>{totalDays}</p>
        </div>
        <div className="attendance-item">
          <h3>Sessions</h3>
          <p>{sessions}</p>
        </div>
        <div className="attendance-item">
          <h3>Training Sessions</h3>
          <p>{trainingSessions}</p>
        </div>
        <div className="attendance-item">
          <h3>Performance Trials</h3>
          <p>{performanceTrials}</p>
        </div>
        <div className="attendance-item">
          <h3>Total Breaks</h3>
          <p>{totalBreaks}</p>
        </div>
      </div> 
      <div className="attendance-title-bar" style={{ width: '80%',height:'20%', margin: '0 auto' }}>
              <h3 className="attendance-title">Calendar Sep 2024</h3>
        </div>    
    <div className="calendar-container">
      
      {/* Calendar Grid */}
      <div className="calendar-grid">
        {/* Days of the week */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}

        {/* Dates and events */}
        {calendarData.map((item, index) => (
        <div
        className={`calendar-cell ${item.special || ""} ${
          item.isNextMonth ? "next-month" : ""
        }`}
        key={index}
      >
          
          <div className="event-dots">
            {item.events.map((event, idx) => (
              <span key={idx} className={`event-dot ${event}`}></span>
            ))}
          </div>
          <div className={`day-number ${item.special === "black-circle" ? "black-circle" : ""}`}>
            {item.day}
          </div>
        </div>
        ))}
      </div>

      {/* Legend */}
      <div className="calendar-legend">
        <div className="legend-item">
          <span className="event-dot performance-trial"></span>
          Performance Trial
        </div>
        <div className="legend-item">
          <span className="event-dot morning-training"></span>
          Morning Training
        </div>
        <div className="legend-item">
          <span className="event-dot evening-training"></span>
          Evening Training
        </div>
        <div className="legend-item">
          <span className="event-dot absent"></span>
          Absent
        </div>
        <div className="legend-item">
          <span className="event-dot break"></span>
          Break
        </div>
        <div className="legend-item">
          <span className="event-dot event"></span>
          Event
        </div>
      </div>
    </div>
    <DottedLine />
    <DashboardGraphs/>
    <DottedLine />
    </div>
  );
};

export default AttendanceSummary;
