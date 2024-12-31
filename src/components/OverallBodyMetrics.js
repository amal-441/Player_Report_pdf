import React from "react";
import BodyDiagram from "./bodyDiagram";
import WellnessAndHealth from "./WellnessAndHealth";
import BodyPerformance from "./bodyPerformance";

const WellnessGuardSummary = () => {
    return (
        <div className="body-metrics-summary" style={{minHeight:"-700px"}}>
            <div className="attendance-title-bar" style={{ width: '80%',height:'20%', margin: '0 auto',marginRight:'100px' }}>
              <h3 className="attendance-title">Body</h3>
        </div>
            <BodyDiagram />    
            <WellnessAndHealth/>   
            <BodyPerformance/>


        </div>
    );
};

export default WellnessGuardSummary;
