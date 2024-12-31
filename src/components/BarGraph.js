import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    width: 230,
    position: 'relative',
    left: 10,
  },
  graphTitle: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  graphArea: {
    position: 'relative',
    width: '100%',
    height: 150,
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
  },
  yAxis: {
    position: 'absolute',
    left: -25,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  yLabel: {
    fontSize: 8,
    color: '#555',
  },
  gridLine: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    left: 0,
  },
  barContainer: {
    position: 'absolute',
    bottom: 0,
    left: 25,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between', 
    width: '70%',
  },
  bar: {
    width: 20,
    borderRadius: 2,
    position: 'relative',
    marginHorizontal: 3,
  },
  barBase: {
    width: '100%',
    backgroundColor: '#d9e8f0',
    height: 100,
  },
  barFill: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#52a8b4',
    width: '100%',
  },
  referenceLines: {
    position: 'absolute',
    left: 0,
    width: '100%',
  },
  refLine: {
    position: 'absolute',
    height: 1,
    width: '100%',
    backgroundColor: '#e88',
  },
  xAxis: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  xLabel: {
    fontSize: 8,
    color: '#555',
    textAlign: 'center',
  },
});

const BarGraph = ({ title, data, graphType }) => {
  const yAxisLabels = [12.0, 11.5, 11.0, 10.5, 10.0, 9.5];
  const gridHeights = [12.0, 11.5, 11.0, 10.5, 10.0, 9.5];
  const referenceLines = [
    { value: 9.58, color: '#33cc33' }, 
    { value: 10.23, color: '#ff9900' }, 
    { value: 10.26, color: '#ff9900' },
    { value: 11.50, color: '#ff9999' }, 
  ];

  if (graphType === "100m") {
    return (
      <View style={styles.container}>
        <Text style={styles.graphTitle}>{title}</Text>
        <View style={styles.graphArea}>
          <View style={styles.yAxis}>
            {yAxisLabels.map((label, index) => (
              <Text key={index} style={styles.yLabel}>{label}</Text>
            ))}
          </View>
          {gridHeights.map((height, index) => (
            <View key={index} style={[styles.gridLine, { bottom: `${((height - 9.5) / 2.5) * 100}%` }]} />
          ))}
          <View style={styles.referenceLines}>
            {referenceLines.map((line, index) => (
              <View
                key={index}
                style={[styles.refLine, { bottom: `${((line.value - 9.5) / 2.5) * 100}%`, backgroundColor: line.color }]}
              />
            ))}
          </View>
          <View style={styles.barContainer}>
            {data.map((item, index) => (
              <View key={index} style={styles.bar}>
                <View style={styles.barBase} />
                <View style={[styles.barFill, { height: `${((12 - item.value) / 2.5) * 100}%` }]} />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.xAxis}>
          {data.map((item, index) => (
            <Text key={index} style={styles.xLabel}>{item.label}</Text>
          ))}
        </View>
      </View>
    );
  }

  // Add similar conditional rendering for other graphs, if needed
  return null; // You can return null for graphs that you do not need to display
};

export default BarGraph;
