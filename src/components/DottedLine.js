import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";

// Define styles for the dotted line
const styles = StyleSheet.create({
  dottedLine: {
    borderBottomWidth: 3, 
    borderBottomColor: "#000", 
    borderStyle: "dotted", 
    marginTop: 8, 
    marginBottom: 20, 
  },
});

// DottedLine Component for React PDF
const DottedLine = () => {
  return <View style={styles.dottedLine}></View>;
};

export default DottedLine;
