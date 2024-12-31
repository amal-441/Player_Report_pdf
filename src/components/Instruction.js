import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

// Define styles for the PDF
const styles = StyleSheet.create({
  container: {
    padding: "10px 20px",
    marginTop: "20px",
  },
  title: {
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "12px",
    marginBottom: "10px",
    textAlign: "left",
  },
  coachName: {
    fontWeight: "bold",
    color: "red",
  },
  textContainer: {
    border: "1px solid grey",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    fontSize: "10px",
    lineHeight: 1.4,
  },
  Text:{
    fontSize:'10px',
    color:"red"
  }
});

// Instruction Component for PDF
const InstructionText = ({ text }) => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>
        Instructions by Coach <Text style={styles.coachName}>Sivasankar</Text>
      </Text>

      {/* Instruction Text */}
      <View style={styles.textContainer}>
        <Text>{text || "No instructions provided."}</Text>
      </View>
    </View>
  );
};

export default InstructionText;
