import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  eventCard: {
    padding: '10px', // Same as original padding
    marginTop: '10px',
    width: '95%', // Same width as the original card
    maxWidth: 500, // Max width similar to your original design
    marginLeft: 'auto', // Centers the card horizontally
    marginRight: 'auto', // Centers the card horizontally
  },
  eventContent: {
    flexDirection: 'column',
    gap: '10px', // Spacing between sections in the card
  },
  eventTableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between headers
    fontWeight: 'bold',
    marginBottom: 5, // Ensures there's a gap between header and body
  },
  eventTableBody: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between each item in the body
  },
  eventTableItem: {
    padding: 5,
    textAlign: 'center', // Center-align the text as in your CSS
    fontSize: 10, // Ensure font size is the same as in the original design
  },
});

const EventCard = ({ highScore, avgScore, seasonBest, minScore }) => {
  return (
    <View style={styles.eventCard}>
      <View style={styles.eventContent}>
        {/* Event Table Body */}
        <View style={styles.eventTableBody}>
          <Text style={styles.eventTableItem}>{highScore}</Text>
          <Text style={styles.eventTableItem}>{avgScore}</Text>
          <Text style={styles.eventTableItem}>{seasonBest}</Text>
          <Text style={styles.eventTableItem}>{minScore}</Text>
        </View>

        {/* Event Table Header */}
        <View style={styles.eventTableHeader}>
          <Text style={styles.eventTableItem}>High Score</Text>
          <Text style={styles.eventTableItem}>Avg Score</Text>
          <Text style={styles.eventTableItem}>Season Best</Text>
          <Text style={styles.eventTableItem}>Min Score</Text>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
