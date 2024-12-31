import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  iconText: {
    fontSize: 16,
    color: '#39b54a',
    fontFamily: 'FontAwesome',
  },
});

const PDFIconGrid = () => (
  <Document>
    <Page>
      <View>
        {/* Using Unicode for Wine Glass */}
        <Text style={styles.iconText}>&#xf4e3;</Text>

        {/* Add more icons or text */}
        <Text>Legend: Normal</Text>
      </View>
    </Page>
  </Document>
);

export default PDFIconGrid;
