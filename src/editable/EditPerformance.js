import React , {useState}from "react";
import EventCard from "../components/EventCard";
import CoachComment from "../components/CoachComment";
import RankCard from "../components/RankCard"
import PerformanceGraph from '../components/PerformanceGraph';
import styles from '../components/PDFDocument.module.css';
import { FaWineGlass, FaBed, FaRegSmile } from 'react-icons/fa'; 
import { IoIosBatteryCharging } from 'react-icons/io'; 
import { FaDroplet } from "react-icons/fa6";

// Manually create y-values for each event
const yValues100m = [
  '9:00', '9:50', '10:40', '11:30', '12:00'
]; // 100m: 9:00 to 12:00 in increments of 50 minutes

const yValues200m = [
  '19:00', '19:50', '20:40', '21:30', '22:00', '23:00', '23:50', '24:00'
]; // 200m: 19:00 to 24:00 in increments of 50 minutes

const yValuesLongJump = [
  '6:00', '6:50', '7:40', '8:30', '9:00'
]; // Long Jump: 6:00 to 9:00 in increments of 50 minutes



const commentData = [
  {
    event: "100 m",
    weeks: [
      {
        week: "1. Week 1",
        comment: "Strong start, but focus on maintaining form and relaxation throughout the race",
      },
      {
        week: "2. Week 2",
        comment: "Improved posture and pacing; work on syncing arm swing with leg drive",
      },
      {
        week: "3. Week 3",
        comment: "Great progress; quicken leg turnover and stay relaxed for a strong finish",
      },
    ],
  },
  {
    event: "200 m",
    weeks: [
      {
        week: "1. Week 1",
        comment: "Strong start, but focus on maintaining form and relaxation throughout the race",
      },
      {
        week: "2. Week 2",
        comment: "Your acceleration off the bend is improving; work on holding form and pushing harder in the last 50 meters",
      },
      {
        week: "3. Week 3",
        comment: "Great work through the curve; focus on staying strong and efficient in the home straight to finish faster",
      },
    ],
  },
  {
    event: "Long Jump",
    weeks: [
      {
        week: "1. Week 1",
        comment: "Good speed on approach, but focus on timing your jump for maximum height and distance",
      },
      {
        week: "2. Week 2",
        comment: "Your take-off is improving; work on driving your knees higher in the air for a stronger jump",
      },
      {
        week: "3. Week 3",
        comment: "Solid approach and take-off; now focus on extending your legs forward in the air for better landing distance",
      },
    ],
  },
];


const EditPerformanceSummary = ({ performanceData, dateRange1, setDateRange1 }) => {
  const labels = ['Sep-05', 'Sep-12', 'Sep-19']; // Example labels
  const highScore = [9.58, 10.23, 11.11]; // Example high scores
  const avgScore = [9.50, 10.00, 11.00]; // Example avg scores
  const lowScore = [9.20, 9.80, 10.50]; // Example low scores


  
  // State for the second date range
  const [dateRange2, setDateRange2] = useState("Sep 16 - Sep 30");

  const handleEditClick2 = () => {
    console.log("Editing:", dateRange2);
  };

  

  return (
    <div className="performance-summary">
      <h2 className="performance-summary-heading">Performance Summary</h2>
      <div className='performanceRow' style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <div className='performancehorizontalBar'>
                            <div className='hr1'></div>
                            <span className='text'>World Record</span>
                            <div className='hr2'></div>
                            <span className='text'>National Record</span>
                       
                            <div className='hr3'></div>
                            <span className='text'>State Record</span>
                       
                            <div className='hr4'></div>
                            <span className='text'>High Score</span>
                       
                            <div className='hr5'></div>
                            <span className='text'>Low Score</span>
                        </div>
        </div>
  
      <div className="performance-layout">
        {/* First Row: 100m & 200m */}
        <div className="performance-row" > 
          {performanceData.slice(0, 2).map((event, index) => (
            <div className="performance-events" key={index}style={index === 0 ? { marginRight: "70px" } : {}}>
              <div className="event-title-bar">
                <h3 className="event-title">{event.event}</h3>
              </div>
              <EventCard {...event} />
              <RankCard
          district={event.rank.district}
          state={event.rank.state}
          national={event.rank.national}
        />
          {/* Add Graph Below */}
          <div style={{ width: '90%', margin: '0 auto' }}>
            <PerformanceGraph
            labels={event.labels}
            highScore={highScore}
            avgScore={avgScore}
            lowScore={lowScore}
            yAxisLabels={
              event.event === '100 m' ? yValues100m :
              event.event === '200 m' ? yValues200m :
              event.event === 'Long Jump' ? yValuesLongJump : []
            }
            color= 'teal'

            />
          
        </div>
            </div>
          ))}
        </div>

        {/* Second Row: Long Jump & Coach's Comments */}
        <div className="performance-row">
          <div className="performance-events">
            {/* Long Jump */}
            <div className="event-title-bar" style={{ width: '80%', margin: '0 auto' }}>
              <h3 className="event-title">Long Jump</h3>
            </div>
            <EventCard {...performanceData[2]} />
            <RankCard
      district={performanceData[2].rank.district}
      state={performanceData[2].rank.state}
      national={performanceData[2].rank.national}
    />
            <div style={{  width: '90%', margin: '10px auto 0 auto', paddingTop: '20px' }}>
            <PerformanceGraph
            labels={labels}
            highScore={highScore}
            avgScore={avgScore}
            lowScore={lowScore}
            color="orange"
            // style={{ marginTop: '50px' }}
            />
        </div>
           
          </div>

          <div className="vertical-divider"></div> {/* Vertical divider for separation */}

          <div className="performance-events">
            {/* Coach's Comment */}
            <div className="event-title-bar">
              <h3 className="event-title">Coach's Comment After Trial</h3>
            </div>
            <CoachComment commentData={commentData} />
            <div className="performance-events">
              <div className="full-length-title-bar">
              <h3 className="full-length-title">Performancess Influencing Factorsss</h3>

            </div>
            <div className={styles.iconContainer}> 
                        <div className={styles.iconRow}> 
                        <input type="text"value={dateRange1} onChange={(e) => setDateRange1(e.target.value)}/>
                        <span className="leftText"></span>
                        <div className={`${styles.iconItem} ${styles.wineBg}`}> 
                        <FaWineGlass className={styles.icon} /> 
                         </div> 
                         <div className={`${styles.iconItem} ${styles.sleepBg}`}> <FaBed className={styles.icon} /> 
                          </div> 
                          <div className={`${styles.iconItem} ${styles.smileBg}`}> <FaRegSmile className={styles.icon} /> 
                           </div> 
                           <div className={`${styles.iconItem} ${styles.batteryBg}`}> <IoIosBatteryCharging className={styles.icon} /> 
                            </div> 
                            <div className={`${styles.iconItem} ${styles.hydrationBg}`}> <FaDroplet className={styles.icon} /> 
                             </div> 
                        </div> 
                        <div className={styles.iconRow}>
                        <input type="text" value={dateRange2} onChange={(e) => setDateRange2(e.target.value)}/>
                        <span className={styles.leftText} onClick={handleEditClick2}>
                        </span>
                        <div className={`${styles.iconItem} ${styles.wineBg}`}> 
                        <FaWineGlass className={styles.icon} /> 
                         </div> 
                         <div className={`${styles.iconItem} ${styles.sleepBg}`}> <FaBed className={styles.icon} /> 
                          </div> 
                          <div className={`${styles.iconItem} ${styles.smileBg}`}> <FaRegSmile className={styles.icon} /> 
                           </div> 
                           <div className={`${styles.iconItem} ${styles.batteryBg}`}> <IoIosBatteryCharging className={styles.icon} /> 
                            </div> 
                            <div className={`${styles.iconItem} ${styles.hydrationBg}`}> <FaDroplet className={styles.icon} /> 
                             </div> 
                        </div>
                         
                        </div> 
                        {/* Legend Section */} 
                        <div className={styles.legendContainer}> 
                           
                            <div className={styles.legendItem}> 
                                <div className={`${styles.legendCircle} ${styles.legendSleep}`} /> 
                                <div className={styles.legendText}> Normal:  85-90%</div> 
                            </div> 
                            
                            <div className={styles.legendItem}>
                                     <div className={`${styles.legendCircle} ${styles.legendSunny}`} />
                            <div className={styles.legendText}> Moderate: 70-85%</div> </div> 
                            <div className={styles.legendItem}> 
                                <div className={`${styles.legendCircle} ${styles.legendSunset}`} /> 
                                <div className={styles.legendText}> Poor:  70%</div> </div>
                        </div>
  {/* You can add content for this section here */}
</div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPerformanceSummary;
