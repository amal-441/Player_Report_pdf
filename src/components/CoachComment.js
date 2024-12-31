import React from "react";

const CoachComment = ({ commentData }) => {
  return (
    <div
      style={{
        margin: "0 auto", // Center the content
        padding: "0 30px", // Adds space on both ends
        width: "90%", // Allows proper scaling
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f5f5f5",
        fontFamily: "'Times New Roman', Times, serif",
        fontWeight: "normal",
        fontSize: "28px",
        textRendering: "optimizeLegibility", // Ensures clear font rendering
      }}
    >
      {commentData.map((item, index) => (
        <div key={index}>
          <p
            style={{
              marginBottom: "8px",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#000",
              textAlign: "left",
            }}
          >
            {item.event}
          </p>

          {/* White background box for description */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "12px",
              marginBottom: "12px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#000",
            }}
          >
            {item.weeks.map((week, idx) => (
              <p
                key={idx}
                style={{
                  textAlign: "justify",
                  marginBottom: "5px",
                  fontSize: "20px",
                  lineHeight: "1.6",
                  color: "#000",
                }}
              >
                {`${week.week}: ${week.comment}`}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoachComment;
