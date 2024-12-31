import React from "react";
import { Page, Text, View, Image, Document, StyleSheet } from "@react-pdf/renderer";
import InstructionText from "./Instruction";
import DottedLine from "./DottedLine";
import PerformanceSummary from "./PerformanceSummary";
import PDFIconGrid from "./IconGrid";
import FooterBar from "./FooterBar";

// Define styles for the PDF
const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "#e00a0a", // Red background
    display: "flex",
    flexDirection: "column",
  },
  topBorder: {
    height: "40px", // Grey border
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  whiteBorder: {
    height: "35px",
    backgroundColor: "#ddd", // White border
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  headerName: {
    position: "absolute",
    left: "20px",
    color: "white",
    fontSize: "14px",
  },
  logo: {
    width: "13px",
    position: "absolute",
    right: "90px",
  },
  name:{
    color:"white",
    fontSize:'12px'
  },
  companyName: {
    position: "absolute",
    right: "10px",
    color: "white",
    fontSize: "10px",
  },
  profileImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50px", 
    border: "2px solid #ccc",
    position: "absolute",
    right: "250px",
    top: "15px",
  },
  reportHeading: {
    fontSize: "13px",
    fontWeight: "bold",
    color: "black",
    marginLeft: "20px",
    flex: 1,
  },
  rightText: {
    fontWeight: "bold",
    fontSize:"10px",
    marginLeft: "20px",
    whiteSpace: "nowrap",
  },
  header: {
    backgroundColor: '#e5f7f8',
    padding: 4,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#00688b',
    textAlign: 'center',
    width: '100%',
    position:'absolute',
    marginTop:"100px"
  },
});

// Create the PDF Header component
const PDFHeader = ({ name, category, profileImage, reportHeading }) => {
  return (
    <View style={styles.headerContainer} fixed>
      {/* Grey border */}
      <View style={styles.topBorder}>
        <Text style={styles.headerName}>{name}</Text>
        <Image style={styles.logo} src="/images/logo.png" />
        <Text style={styles.companyName}>XI PERFORMER</Text>
      </View>

      {/* White border with report heading */}
      <View style={styles.whiteBorder}>
        <Text style={styles.reportHeading}>{reportHeading}</Text>
        <Text style={styles.rightText}>100 m | 200 m | Long Jump</Text>
      </View>

      {/* Profile image */}
      <Image style={styles.profileImage} src="/images/profile-image.png" />
    </View>
  );
};

// Create the entire PDF document
const Header = ({ name, category, profileImage, reportHeading }) => (
  <Document>
    <Page size="A4">
      <PDFHeader
        name={name}
        category={category}
        profileImage={profileImage}
        reportHeading={reportHeading}
      />
      <InstructionText text="CThis month, you've improved your explosive starts and drive phase in the 100m but need to stay relaxed
      in the final stretch for better speed. In the 200m, your curve acceleration is strong, but there's room to push harder in the last 50
      meters. For long jump, your approach and take-off have improved, but focus on driving your knees higher and extending your legs for
      better distance. Overall, solid progress across all events, and we'll keep refining your technique next month!
" />
  <DottedLine />
  <PerformanceSummary/>

  <Text style={styles.textBlock}>
          Cras id lorem feugiat, fringilla risus a, elementum risus. Donec aliquet felis ut ligula tincidunt 
          consequat. Suspendisse potenti. Etiam gravida, magna vitae ullamcorper posuere, eros lectus tristique 
          risus, non suscipit urna lectus eget nisl. Aliquam tincidunt lacus id ultricies consectetur. Integer 
          dictum leo ut neque bibendum, sed scelerisque dolor fermentum. Morbi nec sollicitudin nulla, eget 
          dignissim risus. Etiam varius sed urna ac tristique.j1opjp1pa
          wkjwpoq[q[wjdj]]
   </Text>
   {/* Add FooterBar */}
   <FooterBar />
    </Page>
  </Document>
);

export default Header;