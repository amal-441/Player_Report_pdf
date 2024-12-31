import React from "react";

const PerformanceMetric = ({ metric }) => {
  const { event, highScore, avgScore, seasonBest, minScore, rank } = metric;

  return (
    <div style={{ marginBottom: "20px", border: "1px solid #eee", padding: "10px" }}>
      <h4>{event}</h4>
      <p>High Score: {highScore}</p>
      <p>Average Score: {avgScore}</p>
      <p>Season Best: {seasonBest}</p>
      <p>Minimum Score: {minScore}</p>
      <div>
        <strong>Rank:</strong>
        <p>District: {rank.district}</p>
        <p>State: {rank.state}</p>
        <p>National: {rank.national}</p>
      </div>
    </div>
  );
};

export default PerformanceMetric;
