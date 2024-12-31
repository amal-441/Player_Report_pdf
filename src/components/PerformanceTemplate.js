import React from "react";
import Instruction from "./Instruction";
import PerformanceSummary from "./PerformanceSummary";
import styles from "./PerformanceTemplate.module.css"; // Add custom styles if needed

const PerformanceTemplate = () => {
  return (
    <div className={styles.templateContainer}>
      {/* Instruction Section */}
      <Instruction text="Placeholder text for instructions. Add your text here." />

      {/* Performance Summary Section */}
      <PerformanceSummary
        performanceData={[
          {
            event: "100 m",
            rank: { district: "Placeholder", state: "Placeholder", national: "Placeholder" },
            labels: ["Placeholder"],
          },
          {
            event: "200 m",
            rank: { district: "Placeholder", state: "Placeholder", national: "Placeholder" },
            labels: ["Placeholder"],
          },
          {
            event: "Long Jump",
            rank: { district: "Placeholder", state: "Placeholder", national: "Placeholder" },
            labels: ["Placeholder"],
          },
        ]}
      />
    </div>
  );
};

export default PerformanceTemplate;
