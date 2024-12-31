import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footerBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "30px", // Height of the footer bar
    backgroundColor: "#add8e6", // Light blue color
    justifyContent: "center",
    alignItems: "center",
  },
});

const FooterBar = () => <View style={styles.footerBar} fixed/>;

export default FooterBar;
