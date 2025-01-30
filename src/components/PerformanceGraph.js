import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    width: '60%',
    padding: 5,
    marginBottom: 5,
    borderRadius: 4,
    position: 'relative',
    maxHeight: '90%',
  },
  header: {
    backgroundColor: '#B0E0E6',
    padding: 4,
    fontSize: 8,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 0,
    marginTop: -20,
    width: '90%',
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    width: '80%',
    marginTop: 10,
  },
  scoreItem: {
    textAlign: 'center',
  },
  scoreValue: {
    fontSize: 10,
    fontWeight: 'bold',
    color: "#002D62",
  },
  scoreLabel: {
    fontSize: 8,
    color: '#555',
  },
  ranks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    gap: 5,
    width: '95%',
    border: '1px solid #ccc',
    paddingVertical: 10, // Adds vertical spacing inside
    paddingHorizontal: 15, // Adds horizontal spacing inside
    borderWidth: 1, // Border thickness
    borderColor: '#ccc', // Light border color
    borderRadius: 25, // Creates the large rounded corners for the container
    backgroundColor: '#fff', // Ensures background matches the design
    shadowColor: '#000', // Optional for a slight shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    
  },
  rankItem: {
    textAlign: 'center',
    padding: 3,
    width: '25%',
  },
  rankValue: {
    marginBottom: 2,
    fontSize: 10,
    fontWeight: "bold",
    color: "#1e3a8a",
  },
  rankLabel: {
    fontSize: 9,
    color: '#555',
    top:-5
  },
  graphContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  graphImage: {
    width: '80%',
    height: 140,
  },
  eventTitle:{
    fontSize:"8px",
    
  },
  commentSection: {
    width: '60%',
    padding: 5,
    borderRadius: 4,
    maxHeight: '90%',
  },
  commentHeader: {
    backgroundColor: '#B0E0E6',
    padding: 4,
    fontSize: 8,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 0,
    marginTop: -20,
    width: '80%',
  },
  commentBox: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 4,
    marginBottom: 0,
    top:1,
    width:"105%"
  },
  commentTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 8,
    color: '#333',
    padding: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10,
  },
});

const EventSection = ({ title, scores, ranks }) => (
  <View style={styles.container}>
    <Text style={styles.header}>{title}</Text>

    {/* Scores Section */}
    <View style={styles.scores}>
      {scores.map((score, index) => (
        <View style={styles.scoreItem} key={index}>
          <Text style={styles.scoreValue}>{score.value}</Text>
          <Text style={styles.scoreLabel}>{score.label}</Text>
        </View>
      ))}
    </View>

    {/* Ranks Section */}
    <View style={styles.ranks}>
      {ranks.map((rank, index) => (
        <View style={styles.rankItem} key={index}>
          <Text style={styles.rankLabel}>{rank.label}</Text>
          <Text style={styles.rankValue}>{rank.value}</Text>
        </View>
      ))}
    </View>

    {/* Graph Section */}
    <View style={styles.graphContainer}>
      <Image src="/images/blue-chart.png" style={styles.graphImage} />
    </View>
  </View>
);

const CoachComments = () => (
  <View style={styles.commentSection}>
    <Text style={styles.commentHeader}>Coach's Comments After Trial</Text>

    <Text style={styles.eventTitle}>100m</Text>
    <View style={styles.commentBox}>
     
      <Text style={styles.commentText}>Week 1: Strong start, but focus on maintaining form and relaxation
      throughout the race.</Text>
      <Text style={styles.commentText}>Week 2: Improved posture and pacing; work on syncing arm swing
      with leg drive</Text>
      <Text style={styles.commentText}>Week 3: Great progress; quicken leg turnover and stay relaxed for a
      strong finish.</Text>
    </View>
    <Text style={styles.eventTitle}>200m</Text>
    <View style={styles.commentBox}>
    <Text style={styles.commentText}>Week 1: Strong start, but focus on maintaining form and relaxation
    throughout the race=</Text>
    <Text style={styles.commentText}>Week 2: Improved posture and pacing; work on syncing arm swing
    with leg drive</Text>
    <Text style={styles.commentText}>Week 3: Great progress; quicken leg turnover and stay relaxed for a
      strong finish.</Text>
    </View>
    <Text style={styles.eventTitle}>Long Jump</Text>
    <View style={styles.commentBox}>
    <Text style={styles.commentText}>Week 1: Strong start, but focus on maintaining form and relaxation
    throughout the race=</Text>
    <Text style={styles.commentText}>Week 2: Improved posture and pacing; work on syncing arm swing
    with leg drive</Text>
    <Text style={styles.commentText}>Week 3: Improved posture and pacing; work on syncing arm swing
    with leg drive</Text>
    </View> 
  </View>
);

const PerformanceGraph = ({ event, scores, ranks }) => {
  const data100m = {
    scores: [
      { label: 'High Score', value: '10.45 s' },
      { label: 'Avg. Score', value: '18.90 s' },
      { label: 'Season Best', value: '15.25 s' },
      { label: 'Min. Score', value: '11.50 s' },
    ],
    ranks: [
      { label: 'District', value: '01 / 368' },
      { label: 'State', value: '08 / 1852' },
      { label: 'National', value: '35/ 6854' },
    ],
  };

  return (
    <View>
      {/* Event Sections */}
      <View style={styles.row}>
        <EventSection title="100m" scores={data100m.scores} ranks={data100m.ranks} />
        <EventSection title="200m" scores={data100m.scores} ranks={data100m.ranks} />
      </View>

      <View style={styles.row}>
        <EventSection title="Long Jump" scores={data100m.scores} ranks={data100m.ranks} />
        <CoachComments />
      </View>
    </View>
  );
};

export default PerformanceGraph;
