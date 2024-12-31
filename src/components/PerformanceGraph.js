import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import BarGraph from './BarGraph';

// Styles for React-PDF
const styles = StyleSheet.create({
  container: {
    width: '60%',
    padding: 5,
    marginBottom: 5,
    borderRadius: 4,
    position: 'relative',
    top: 20,
    maxHeight: '90%',
  },
  header: {
    backgroundColor: '#e5f7f8',
    padding: 4,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#00688b',
    textAlign: 'center',
    marginBottom: 5,
    width: '80%',
  },
  header2: {
    backgroundColor: '#e5f7f8',
    padding: 4,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#00688b',
    textAlign: 'center',
    marginBottom: 3,
    width: '80%',
    marginLeft: 'auto',
    marginRight: '-230px',
    marginTop: -21,
  },
  header4: {
    position: 'absolute',
    backgroundColor: '#e5f7f8',
    padding: 4,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#00688b',
    textAlign: 'center',
    width: '80%',
    top: -230,
    right: -235,
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    gap: 2,
    width: '80%',
    marginRight: -240,
  },
  scores2: {
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    gap: 2,
    width: '85%',
    marginRight: -240,
    marginTop: -21,
  },
  scoreItem: {
    textAlign: 'center',
  },
  scoreItem2: {
    textAlign: 'center',
  },
  scoreValue: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  scoreValue2: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  scoreLabel: {
    fontSize: 8,
    color: '#555',
  },
  scoreLabel2: {
    fontSize: 8,
    color: '#555',
  },
  ranks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 1,
    marginLeft: -20,
    gap: 1,
    width: '90%',
  },
  ranks2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 1,
    marginLeft: -20,
    gap: 1,
    width: '90%',
    marginLeft: 'auto',
    marginRight: -240,
    marginTop: -24,
  },
  rankItem: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    padding: 3,
    width: '25%',
  },
  rankItem2: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    padding: 3,
    width: '25%',
  },
  rankValue: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  rankLabel: {
    fontSize: 8,
    color: '#555',
  },
  graph: {
    marginTop: 10,
  },
  graphRightContainer: {
    marginLeft: '330px',
    marginTop: -185,
  },
  outerBox: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    width:"80%",
    marginLeft: 'auto', 
    marginRight: '-240px', // Adjust this value to fine-tune the position
    marginTop: -200, // Move upwards by 10 pixels
  },
  outerBox2:{
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    width:"80%",
    marginLeft: 'auto', 
    marginRight: '-240px', // Adjust this value to fine-tune the position
    marginTop: 0, // Move upwards by 10 pixels
    minHeight: 80, // Increase the minimum height
    alignSelf: 'center', 
  },
 
  commentBox: {
    padding: 2, // Reduced padding inside each comment box
    marginBottom: 4, // Reduced margin between comments
    backgroundColor: '#ffffff', // White background for the comment box
    borderRadius: 4, // Rounded corners for the individual comment box
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow direction
    shadowOpacity: 0.8, // Shadow intensity
    shadowRadius: 4, // Shadow spread
    elevation: 4, // For Android shadow support
    elevation: 5,
    height: 'auto', // Remove fixed height
    maxHeight: 25, // Set a maximum height
  },
  commentBox2: {
    padding: 2, // Reduced padding inside each comment box
    marginBottom: 4, // Reduced margin between comments
    backgroundColor: '#ffffff', // White background for the comment box
    borderRadius: 4, // Rounded corners for the individual comment box
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow direction
    shadowOpacity: 0.8, // Shadow intensity
    shadowRadius: 4, // Shadow spread
    elevation: 4, // For Android shadow support
    elevation: 5,
    maxHeight: 145, // Set a maximum height
    flexWrap: 'wrap', // Allow text to wrap to multiple lines
  },
  commentText: {
    fontSize: 8,
    color: '#333',
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

// Performance Graph Component
const PerformanceGraph = ({ event, scores, ranks, data }) => {
  const graphData100m = [
    { label: 'Sep-05', value: 11.11 },
    { label: 'Sep-12', value: 11.25 },
    { label: 'Sep-19', value: 11.50 },
  ];

  const graphData200m = [
    { label: 'Sep-05', value: 22.50 },
    { label: 'Sep-12', value: 22.75 },
    { label: 'Sep-19', value: 23.00 },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>{event}</Text>
      <Text style={styles.header2}>200</Text>

      {/* Scores Section */}
      <View style={styles.scores}>
        {scores.map((score, index) => (
          <View style={styles.scoreItem} key={index}>
            <Text style={styles.scoreValue}>{score.value}</Text>
            <Text style={styles.scoreLabel}>{score.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.scores2}>
        {scores.map((score, index) => (
          <View style={styles.scoreItem2} key={index}>
            <Text style={styles.scoreValue2}>{score.value}</Text>
            <Text style={styles.scoreLabel2}>{score.label}</Text>
          </View>
        ))}
      </View>

      {/* Ranks Section */}
      <View style={styles.ranks}>
        {ranks.map((rank, index) => (
          <View style={styles.rankItem} key={index}>
            <Text style={styles.rankValue}>{rank.value}</Text>
            <Text style={styles.rankLabel}>{rank.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.ranks2}>
        {ranks.map((rank, index) => (
          <View style={styles.rankItem2} key={index}>
            <Text style={styles.rankValue}>{rank.value}</Text>
            <Text style={styles.rankLabel}>{rank.label}</Text>
          </View>
        ))}
      </View>

      {/* Graph Section */}
      <View style={styles.graphRow}>
        <BarGraph title="100m Performance" data={graphData100m} graphType="100m" />
        <View style={styles.graphRightContainer}>
          <BarGraph title="100m Performance" data={graphData100m} graphType="100m" />
        </View>
      </View>

      {/* Coach's Comments */}
      <Text style={styles.header}>Longjump</Text>
      <View style={styles.scores}>
        {scores.map((score, index) => (
          <View style={styles.scoreItem} key={index}>
            <Text style={styles.scoreValue}>{score.value}</Text>
            <Text style={styles.scoreLabel}>{score.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.ranks}>
        {ranks.map((rank, index) => (
          <View style={styles.rankItem} key={index}>
            <Text style={styles.rankValue}>{rank.value}</Text>
            <Text style={styles.rankLabel}>{rank.label}</Text>
          </View>
        ))}
      </View>

      <BarGraph title="100m Performance" data={graphData100m} graphType="100m" />

      {/* Coach's Comment Box */}
<View>
  <Text style={styles.header4}>Coach's Comment</Text>
  <View style={styles.outerBox}>
    <View style={styles.commentBox}>
      <Text style={styles.title}>Week 1:</Text>
      <Text style={styles.commentText}>
        Strong start, but focus on maintaining form and relaxation throughout the race.
      </Text>
    </View>

    {/* Comment for Week 2 */}
    <View style={styles.commentBox}>
      <Text style={styles.title}>Week 2:</Text>
      <Text style={styles.commentText}>
        Improved posture and pacing; work on syncing arm swing with leg drive.
      </Text>
    </View>

    {/* Comment for Week 3 */}
    <View style={styles.commentBox}>
      <Text style={styles.title}>Week 3:</Text>
      <Text style={styles.commentText}>
        Great progress; quicken leg turnover and stay relaxed for a strong finish.
      </Text>
    </View>
    

  </View>
  <View style={styles.outerBox2}>
  <View style={styles.commentBox2}>
    <Text style={styles.commentText}>
      Week 1: Good first half, but focus on maintaining speed through the curve 
      and staying relaxed on the straight.{"\n"}
      Week 2: Your acceleration off the bend is improving; work on holding form 
      and pushing harder in the last 50 meters.{"\n"}
      Week 3: Great work through the curve; focus on finishing strong.
    </Text>
  </View>
</View>
</View>
    </View>
  );
};

export default PerformanceGraph;
