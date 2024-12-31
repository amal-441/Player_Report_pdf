import Header from "./Header";
import DottedLine from "./DottedLine";
import WellnessGuardSummary from "./WellnessGuard";

const PageThree = () => {
    const playerDetails = {
      name: "Yuva Swasthick - U16(M)",
      category: "100 m | 200 m | Long Jump",
      profileImage: "https://img.freepik.com/premium-photo/cute-little-angel-sitting-clouds-laughing-cheerfully_127093-3141.jpg?w=360",
    };
  
    const reportHeading = "Player Monthly Report"; // Example report heading
  
    return (
      <div>
        <Header
          name={playerDetails.name}
          profileImage={playerDetails.profileImage}
          report_heading={reportHeading}
        />
        <DottedLine />
        <WellnessGuardSummary/>

      </div>
    );
  };
  
  export default PageThree;
  

