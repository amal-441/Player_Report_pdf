import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Header from "./Header"; // Import the Header component


const PageOne = () => {
  return (
    <PDFViewer width="100%" height="600">
      <Header
        name="YUVA SWASTHICK-U16(M)"
        category="Athlete"
        profileImage="/images/profile-image.png"
        reportHeading="Performance Report"
      />
       {/* Add Instruction Component */}
      
    </PDFViewer>
  );
};

export default PageOne;
