import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Styles adapted for React-PDF
const styles = StyleSheet.create({
  rankCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: 30,
    width: '100%',
    maxWidth: 480,
    marginTop: 10,
    marginLeft: 20, // Same as your margin-left in CSS
    // React-PD does not support box-shadow directly.
    // Shadow effects can be replaced with borders or background patterns, but we'll omit box-shadow here.(important)
  },
  rankTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d2d2d',
    marginBottom: 15,
  },
  rankRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rankItem: {
    textAlign: 'center',
  },
  rankLabel: {
    fontWeight: 'bold',
    color: '#555',
    fontSize: 14,
  },
  rankNumber: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 16,
    marginTop: 5, 
  },
});

const RankCard = ({ district, state, national }) => {
  return (
    <View style={styles.rankCard}>
      {/* Rank Display - Horizontal Alignment */}
      <View style={styles.rankRow}>
        <View style={styles.rankItem}>
          <Text style={styles.rankLabel}>Rank</Text>
        </View>

        <View style={styles.rankItem}>
          <Text style={styles.rankLabel}>District</Text>
          <Text style={styles.rankNumber}>{district}</Text>
        </View>

        <View style={styles.rankItem}>
          <Text style={styles.rankLabel}>State</Text>
          <Text style={styles.rankNumber}>{state}</Text>
        </View>

        <View style={styles.rankItem}>
          <Text style={styles.rankLabel}>National</Text>
          <Text style={styles.rankNumber}>{national}</Text>
        </View>
      </View>
    </View>
  );
};

export default RankCard;
