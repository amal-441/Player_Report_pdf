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
    backgroundColor: '#B0E0E6',
    padding: 4,
    fontSize: 8,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 40,
    width: '90%',
    minHeight:"19px",
    height:13,
    marginLeft:-20
  },
  header2: {
    backgroundColor: '#B0E0E6',
    padding: 4,
    fontSize: 8,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 3,
    width: '90%',
    marginLeft: 270,
    marginRight: '-230px',
    marginTop: -62,
    minHeight:"19px",
    height:13
  },
  header3: {
    backgroundColor: '#B0E0E6',
    padding: 4,
    fontSize: 8,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    width: '80%',
    position: 'absolute', // Make the header position: 'absolute'
    marginTop:246,
    minHeight:"20px",
    height:13
  },
  header4: {
    backgroundColor: '#B0E0E6',
    width: '80%',
    marginTop:-200,
    marginLeft:290,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    padding: 4,
    textAlign: 'center',
    minHeight:"20px",
    height:13
    
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    width: '80%',
    marginRight: -240,
    marginTop: 0, 
  },
  scores2: {
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    gap: 2,
    width: '85%',
    marginRight: -240,
    marginTop: 0   
  },
  scores3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    position:"absolute",
    width: '80%',
    marginRight: -240,
    marginTop: 310, 
    
   
  },
  scoreItem: {
    textAlign: 'center',
    justifyContent: 'space-between',
    marginTop:22
  },
  scoreItem2: {
    textAlign: 'center',
    marginTop:-17
  },
  scoreItem3: {
    textAlign: 'center',
    marginTop:-40
  },
  scoreValue: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop:-20
   
  },
  scoreValue2: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  scoreLabel: {
    fontSize: 8,
    color: '#555',
    marginTop: -12,
  
  },
  scoreLabel2: {
    fontSize: 8,
    color: '#555',
  },
  scoreLabel3: {
    fontSize: 8,
    color: '#555',
    marginTop: -12,
  
  },
  scoreValue3: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  Selection:{
    
  },
  ranks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:5,
    marginLeft: -10,
    gap: 1,
    width: '82%',
    border: '1px solid #ccc', // Create a solid border
    borderRadius: 5, // Add slight border radius
    boxShadow: '0px 5px 8px rgba(214, 0, 0, 0.85)', // Adjust shadow for a softer look
    marginBottom: 8,
    paddingBottom: 15, // Add padding to the bottom
    paddingTop:25
  },
  ranks2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 280,
    gap: 1,
    width: '85%',
    border: '1px solid #ccc', // Create a solid border
    borderRadius: 5, // Add slight border radius
    boxShadow: '0px 5px 8px rgba(214, 0, 0, 0.85)', // Adjust shadow for a softer look
    marginTop: -50, // Move upwards
    marginBottom: 16,
    paddingBottom: 15, // Add padding to the bottom
    paddingTop:25
  },
  ranks3:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: -10,
    gap: 1,
    width: '80%',
    border: '1px solid #ccc', // Create a solid border
    borderRadius: 5, // Add slight border radius
    boxShadow: '0px 5px 8px rgba(214, 0, 0, 0.85)', // Adjust shadow for a softer look
    marginBottom: 10,
    marginTop: -200, // Move upwards
    paddingBottom: 10, // Add padding to the bottom
    paddingTop:25
  },
  rankItem: {
    textAlign: 'center',
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
    marginBottom: 2,
    fontSize: 12,
    fontWeight: "bold",
    color: "#1e3a8a", // Dark blue
    marginTop:-20
  },
  rankSubValue:{
    fontSize: 8,
    color: "#6b7280", // Gray color
   
  },
  rankLabel: {
    fontSize: 9,
    color: '#555',
  },
  graphRow:{
    marginTop:-30,
    
  },
  graphRightContainer: {
    marginLeft: '310px',
    marginTop: -360,
    height:"102%"
  },
  graph3:{
  
    marginTop:-23,
    
    
  },
  outerBox: {
    margin: 10,
    padding: 10,
    backgroundColor:"white",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    width:"80%",
    marginLeft: 'auto', 
    marginRight: '-240px', // Adjust this value to fine-tune the position
    marginTop: 19.9, // Move upwards by 10 pixels
    height: 110, // Height remains the same; adjust based on content
    paddingBottom: -10, // Remove bottom padding to reduce extra space
    
  },
  outerBox2:{
    margin: 10,
    padding: 10,
    backgroundColor:"white",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    width:"80%",
    marginLeft: 'auto', 
    marginRight: '-240px', // Adjust this value to fine-tune the position
    marginTop: 10, // Move upwards by 10 pixels
    height: 100, // Height remains the same; adjust based on content
    paddingBottom: -10, // Remove bottom padding to reduce extra space
  },
 
  commentBox: {
    padding: 2, // Reduced padding inside each comment box
    marginBottom: 3, // Reduced margin between comments
    backgroundColor: '#ffffff', // White background for the comment box
    borderRadius: 4, // Rounded corners for the individual comment box
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow direction
    shadowOpacity: 0.8, // Shadow intensity
    shadowRadius: 4, // Shadow spread
    elevation: 4, // For Android shadow support
    elevation: 5,
    maxHeight: 20, // Set a maximum height
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
  outerTitle:{
    fontSize:9
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});


// Performance Graph Component
const PerformanceGraph = ({ event, scores, ranks, data }) => {
  const graphData100m = [
    { label: 'Sep-05', value: 11.11 },
    { label: 'Sep-12', value: 11.25 },
    { label: 'Sep-19', value: 11.50 },
  ];

  const data100m = {
    scores: [
      { label: 'High Score', value: '10.45 s' },
      { label: 'Avg. Score', value: '18.90 s' },
      { label: 'Season Best', value: '15.25 s' },
      { label: 'Min. Score', value: '11.50 s' },
    ], 
  }
  
 
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>200</Text>
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
        {data100m.scores.map((score, index) => (
          <View style={styles.scoreItem2} key={index}>
            <Text style={styles.scoreValue2}>{score.value}</Text>
            <Text style={styles.scoreLabel2}>{score.label}</Text>
          </View>
        ))}
      </View>

      {/* Ranks Section */}
      <View style={styles.ranks}>
        {ranks.map((rank, index) => (
          <View style={styles.rankItem}>
            <Text style={styles.rankLabel}>{rank.label}</Text>
            <Text style={styles.rankValue}>
            {rank.value.split(' ')[0]} <Text style={styles.rankSubValue}>/ {rank.value.split(' ')[2]}</Text>
          </Text>
        </View>
        ))}
      </View>

      <View style={styles.ranks2}>
        {ranks.map((rank, index) => (
          <View style={styles.rankItem}>
            <Text style={styles.rankLabel}>{rank.label}</Text>
            <Text style={styles.rankValue}>
            {rank.value.split(' ')[0]} <Text style={styles.rankSubValue}>/ {rank.value.split(' ')[2]}</Text>
          </Text>
        </View>
        ))}
      </View>

      {/* Graph Section */}
      <View style={styles.graphRow}>
        <BarGraph title="" data={graphData100m} graphType="100m" />
        <View style={styles.graphRightContainer}>
          <BarGraph title="" data={graphData100m} graphType="100m" />            
        </View>
      </View>

      {/* Coach's Comments */}
      <Text style={styles.header3}>Longjump</Text>
      <View style={styles.scores3}>
        {scores.map((score, index) => (
          <View style={styles.scoreItem3} key={index}>
            <Text style={styles.scoreValue3}>{score.value}</Text>
            <Text style={styles.scoreLabel3}>{score.label}</Text>
          </View>
        ))}
      </View>

    <View style={styles.section}>
    <Text style={styles.header4}>CoachComment</Text>
    <View>
    <Text style={styles.outerTitle}></Text>
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
    <View style={styles.commentBox}>
      <Text style={styles.title}>Week 3:</Text>
      <Text style={styles.commentText}>
         Your take-off is improving; work on driving your knees higher
        in the air for a stronger jump=
      </Text>
    </View>    
  </View>
  <View style={styles.outerBox2}>
  <View style={styles.commentBox}>
      <Text style={styles.title}>Week 1:</Text>
      <Text style={styles.commentText}>
      Good speed on approach, but focus on timing your jump for
      maximum height and distance
      </Text>
    </View>

     {/* Comment for Week 2 */}
     <View style={styles.commentBox}>
      <Text style={styles.title}>Week 2:</Text>
      <Text style={styles.commentText}>
      Your take-off is improving; work on driving your knees higher
      in the air for a stronger jump
      </Text>
    </View>
    <View style={styles.commentBox}>
      <Text style={styles.title}>Week 3:</Text>
      <Text style={styles.commentText}>
      Solid approach and take-off; now focus on extending your legs
      forward in the air for better landing distance
      </Text>
    </View>    
  </View>
    </View>
    </View>
      <View style={styles.ranks3}>
        {ranks.map((rank, index) => (
          <View style={styles.rankItem3} key={index}>
            <Text style={styles.rankValue}>{rank.value}</Text>
            <Text style={styles.rankLabel}>{rank.label}</Text>
          </View>
        ))}
      </View>
      < View style={styles.graph3}>
    <BarGraph title="" data={graphData100m} graphType="100m" barColor="#ff5733"  />
   </View>
    </View>
    
   
    
  );
};

export default PerformanceGraph;
