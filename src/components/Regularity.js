import React from "react";
import { Text, View, StyleSheet ,Image,Svg} from "@react-pdf/renderer";
import DottedLine from "./DottedLine";
import WorkoutTablePDF from "./workout";
import CalendarComponent from "./CalenderComponent";




const styles = StyleSheet.create({
  attendanceSummary: {
    padding: 20,
    fontFamily: "Helvetica",
    marginTop: -10
  },
  titleBar: {
    backgroundColor: "#8acff0",
    padding: 10,
    marginBottom: 5,
    textAlign: "center",
    height: "20px", // Reduce width to 90%
  },
  titleText: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#333",

  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Center icons vertically
  },
  icon: {
    marginHorizontal: 4,
    color: "#888",
    marginRight:-10,
    backgroundColor:'red'
  },
  divider: {
    fontSize: 20,
    marginHorizontal: 5, // Add spacing around the divider
  },
  grid: {
    flexDirection: "row", // Ensure all items are in a row
    justifyContent: "space-around", // Space items evenly
    alignItems: "flex-start", // Align items at the top
    paddingHorizontal: 15, // Add horizontal padding
    flexWrap: "nowrap", // Prevent wrapping to the next line
  },
  gridItem: {
    width: "20%",
    backgroundColor: "#e9ecef",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    fontSize:3
  },
  itemTitle: {
    fontSize: 8,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
  },
  itemValue: {
    position:"relative",
    fontSize: 12,
    color: "#000",
  },
  calendarContainer: {
    marginBottom: 20,
    width: "75%"
  },
  calendarGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderTop: "1px solid #ddd",
    borderLeft: "1px solid #ddd",
  },
  calendarHeader: {
    width: "14.28%",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    borderRight: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
  },
  calendarCell: {
    width: "14.28%",
    height: 50,
    borderRight: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  dayNumber: {
    fontSize: 10,
    color: "#000",
    textAlign: "center",
    zIndex: 1, // Ensure the number is above the circle
    position: "absolute", // Place the number on top of the circle
    marginTop:-11
  },
  blackCircle: {
    backgroundColor: "grey",
    color: "grey",
    width: 15,
    height: 15,
    borderRadius: "50%",
    textAlign: "center",
    fontSize: 8,
    lineHeight: 20,
    marginTop:-15
  },
  transparentCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with transparency
    position: "absolute", // Ensure proper positioning
    zIndex: 1, // Place behind the number
    marginTop:-100
  },
  eventDots: {
    top: 0, // Position the dots at the top
    left: 0, // Position the dots at the left
  },
  performanceTrial: { backgroundColor: "#ff6347" },
  morningTraining: { backgroundColor: "#4682b4" },
  eveningTraining: { backgroundColor: "#ffa500" },
  absent: { backgroundColor: "#ff4500" },
  break: { backgroundColor: "#32cd32" },
  event: { backgroundColor: "#6a5acd" },
  
  legend: {
    position: "absolute", // Positions the legend
    top: 10, // Adjust top distance
    right: 5, // Adjust right distance
    padding: 10,
    backgroundColor: "#f9f9f9", // Light background for visibility
    borderRadius: 5,
    shadowColor: "#000", // Shadow for better contrast
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, 
    width: 'auto', 
    maxWidth: 150, 
    maxHeight: 100, 
    marginRight:-140,
    fontSize:'10px',
    marginTop: 120, // Move downwards by 50 pixels   
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8, // Space between legend items
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8, // Space between dot and text
  },
  performanceTrial: {
    backgroundColor: "green", // Color for Performance Trial
  },
  morningTraining: {
    backgroundColor: "blue", // Color for Morning Training
  },
  eveningTraining: {
    backgroundColor: "purple", // Color for Evening Training
  },
  absent: {
    backgroundColor: "red", // Color for Absent
  },
  break: {
    backgroundColor: "black", // Color for Break
  },
  event: {
    backgroundColor: "orange", // Color for Event
  },
});

const AttendanceSummaryPDF = () => {
  // Hardcoded data for attendance details
  const attendanceDetails = {
    totalDays: "22.5 / 25",
    sessions: "22/25 / 23/25",
    trainingSessions: 15,
    performanceTrials: 5,
    totalBreaks: 3,
  };

  

  // Hardcoded data for calendar
  const calendarData = Array.from({ length: 35 }, (_, i) => ({
    day: (i % 30) + 1,
    events: i % 5 === 0 ? ["performanceTrial"] : ["morningTraining"],
  }));

  return (
    <View style={styles.attendanceSummary}>
      {/* Attendance Summary */}
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Attendance</Text>
      </View>
      <View style={styles.grid}>
  <View style={styles.gridItem}>
    <Text style={styles.itemTitle}>Total Days</Text>
    <Text style={styles.itemValue}>{attendanceDetails.totalDays}</Text>
   
  </View>
  <View style={styles.gridItem}>    
    <Text style={styles.itemTitle}>Sessions</Text>
    
    <Text style={styles.itemValue}>{attendanceDetails.sessions}</Text>
  </View>
  <View style={styles.gridItem}> 
    <Text style={styles.itemTitle}>Training Sessions</Text>
    <Text style={styles.itemValue}>{attendanceDetails.trainingSessions}</Text>
  </View>
  <View style={styles.gridItem}>  
    <Text style={styles.itemTitle}>Performance Trials</Text>
    <Text style={styles.itemValue}>{attendanceDetails.performanceTrials}</Text>
  </View>
  <View style={styles.gridItem}>   
    <Text style={styles.itemTitle}>Total Breaks</Text>
    <Text style={styles.itemValue}>{attendanceDetails.totalBreaks}</Text>
  </View>
</View>

      {/* Calendar Section */}
      <CalendarComponent calendarData={calendarData} />
      {/* Dotted Line and Graphs */}
      <DottedLine style={styles.dottedLine} />
      <Image src="/images/dashboard_graph.png" style={styles.image} />
      <WorkoutTablePDF/>
      <DottedLine style={styles.dottedLine} />

    </View>
  );
};

export default AttendanceSummaryPDF;
