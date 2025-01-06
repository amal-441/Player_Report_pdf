import React from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';
import PerformanceGraph from './PerformanceGraph';
import DottedLine from './DottedLine';

// Create styles for the PDF based on your CSS, but with color-based names
const styles = StyleSheet.create({
  view: {
    flexDirection: 'column', // This is for the outer container to stack everything vertically
    padding: 20,
  },
  performanceRow: {
    display: 'flex',
    justifyContent: 'center', // Centers the entire row horizontally correcty
    alignItems: 'center', // Vertically aligns items in the center
    fontSize: 10,
    marginTop: -40,
    marginLeft: 350,
    marginBottom: -15,
    backgroundColor: 'white',
    border: '2px solid white',
    borderRadius: 15,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '0px 2px',
    width: '85%', // Make the row take the full width
    height: 'auto',
    
  },
  performanceHorizontalBarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Align items horizontally, starting from the left
    flexDirection: 'row', // Arrange elements in a horizontal row
    width: '100%', // Take full width of the container
    marginRight: "580px",
    border: '1px solid #ccc', // Create a solid border
    borderRadius: 5, // Add slight border radius
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Adjust shadow for a softer look

  },
  performanceHorizontalBar: {
    height: 8,
    width: 25, // Define fixed width for color blocks
    marginRight: 10, // Space given  between color block and text
  },
  // Color-based styles with descriptive names
  worldRecord: {
    backgroundColor: '#FF0000', // Red for World Record
  },
  nationalRecord: {
    backgroundColor: '#007BFF', // Blue for National Record
  },
  stateRecord: {
    backgroundColor: '#28A745', // Green for State Record
  },
  highScore: {
    backgroundColor: '#FFC107', // Yellow for High Score
  },
  lowScore: {
    backgroundColor: '#DC3545', // Red for Low Score
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 20, // Space between text labels
  },
});

const PerformanceSummary = () => {
  const data100m = {
    scores: [
      { label: 'High Score', value: '11.11 s' },
      { label: 'Avg. Score', value: '11.35 s' },
      { label: 'Season Best', value: '11.25 s' },
      { label: 'Min. Score', value: '11.50 s' },
    ], 
    ranks: [
      { label: 'District', value: '01 / 368' },
      { label: 'State', value: '08 / 1852' },
      { label: 'National', value: '35 / 6854' },
    ],
    data: {
      yAxis: ['9.00', '10.00', '11.00', '12.00'],
      bars: [
        { label: 'Sep-05', value: 9.58, max: 12 },
        { label: 'Sep-12', value: 10.23, max: 12 },
        { label: 'Sep-19', value: 11.11, max: 12 },
      ],
    },
  };

  const scores = [
    { value: 85, label: 'Math' },
    { value: 90, label: 'Science' },
  ];

  const ranks = [
    { value: 1, label: 'Rank A' },
    { value: 2, label: 'Rank B' },
  ];

  const data = [
    { value: 50, label: 'Q1' },
    { value: 70, label: 'Q2' },
    { value: 30, label: 'Q3' },
    { value: 90, label: 'Q4' },
  ];

  return (
    <View style={styles.view}>
      {/* Performance Row with Horizontal Bars */}
      <View style={styles.performanceRow}>
        <View style={styles.performanceHorizontalBarContainer}>
          {/* World Record Block */}
          <View style={[styles.performanceHorizontalBar, styles.worldRecord]} />
          <Text style={styles.text}>World Record</Text>

          {/* National Record Block */}
          <View style={[styles.performanceHorizontalBar, styles.nationalRecord]} />
          <Text style={styles.text}>National Record</Text>

          {/* State Record Block */}
          <View style={[styles.performanceHorizontalBar, styles.stateRecord]} />
          <Text style={styles.text}>State Record</Text>

          {/* High Score Block */}
          <View style={[styles.performanceHorizontalBar, styles.highScore]} />
          <Text style={styles.text}>High Score</Text>

          {/* Low Score Block */}
          <View style={[styles.performanceHorizontalBar, styles.lowScore]} />
          <Text style={styles.text}>Low Score</Text>
        </View>
      </View>

      <View>
        <PerformanceGraph
          event="100 m"
          scores={data100m.scores}
          ranks={data100m.ranks}
          data={data100m.data}
        />
        
      </View>
      
    </View>
   
  );
};

export default PerformanceSummary;
