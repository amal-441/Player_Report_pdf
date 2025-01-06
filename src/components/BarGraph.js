import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    width: 150,
    position: 'relative',
    left: 10,
    height: 350,
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
    height: 130,
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
    zIndex: 2,
  },
  dottedGridLine: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    backgroundImage: 'radial-gradient(circle, #ddd 10%, transparent 10%)',
    backgroundSize: '4px 4px',
  },
  referenceLines: {
    position: 'absolute',
    left: 0,
    width: '100%',
    zIndex: 3,
  },
  refLine: {
    position: 'absolute',
    height: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  refLabel: {
    position: 'absolute',
    right: 0,
    fontSize: 8,
    backgroundColor: '#fff',
    padding: '0 2px',
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
    zIndex: 1,
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
    width: '100%',
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
  extendedLine: {
    position: 'absolute',
    height: 1,
    width: '100%',
    zIndex: 2,
  },
});

const BarGraph = ({ title, data, graphType, barColor = '#52a8b4' }) => {
  const yAxisLabels = [12.0, 11.5, 11.0, 10.5, 10.0, 9.5];
  const gridHeights = [12.0, 11.5, 11.0, 10.5, 10.0, 9.5];
  const referenceLines = [
    { value: 11.0, color: '#ff0000', label: '' },
    { value: 10.75, color: '#00ff00', label: '' },
    { value: 10.25, color: '#0000ff', label: '' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.graphTitle}>{title}</Text>
      <View style={styles.graphArea}>
        {/* Y-Axis Labels */}
        <View style={styles.yAxis}>
          {yAxisLabels.map((label, index) => (
            <Text key={index} style={styles.yLabel}>{label}</Text>
          ))}
        </View>

        {/* Dotted Grid Lines */}
        {gridHeights.map((height, index) => (
          <View
            key={index}
            style={[styles.dottedGridLine, {
              bottom: `${((height - 9.5) / 2.5) * 100}%`,
            }]}/>
        ))}

        {/* Grid Lines */}
        {gridHeights.map((height, index) => (
          <View key={index} style={[styles.gridLine, { bottom: `${((height - 9.5) / 2.5) * 100}%` }]} />
        ))}

        {/* Reference Lines */}
        <View style={styles.referenceLines}>
          {referenceLines.map((line, index) => (
            <React.Fragment key={index}>
              <View
                style={[styles.refLine, {
                  bottom: `${((line.value - 9.5) / 2.5) * 100}%`,
                  backgroundColor: line.color,
                }]}/>
              <Text
                style={[styles.refLabel, { bottom: `${((line.value - 9.5) / 2.5) * 100}%`, color: line.color }]}>
                {line.label}
              </Text>
            </React.Fragment>
          ))}
        </View>

        {/* Random Extended Lines */}
        {Array.from({ length: 3 }).map((_, lineIndex) => {
          const randomHeight = Math.random() * 100;
          const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
          return (
            <View
              key={lineIndex}
              style={[styles.extendedLine, {
                bottom: `${randomHeight}%`,
                backgroundColor: randomColor,
              }]}/>
          );
        })}

        {/* Bars */}
        <View style={styles.barContainer}>
          {data.map((item, index) => (
            <View key={index} style={styles.bar}>
              <View style={styles.barBase} />
              <View style={[styles.barFill, { backgroundColor: barColor, height: `${((12 - item.value) / 2.5) * 100}%` }]} />
            </View>
          ))}
        </View>
      </View>

      {/* X-Axis Labels */}
      <View style={styles.xAxis}>
        {data.map((item, index) => (
          <Text key={index} style={styles.xLabel}>{item.label}</Text>
        ))}
      </View>
    </View>
  );
};

export default BarGraph;
