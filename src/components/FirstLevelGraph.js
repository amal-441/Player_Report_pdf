// import React from 'react';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const FirstLevelGraph = () => {
//   const data = {
//     labels: ['😍', '😀', '😮', '😟', '🥹', '😩', '😡'], // Emoji labels on X-axis
//     datasets: [
//       {
//         label: 'Feel Level (%)',
//         data: [10, 30, 20, 10, 20, 10, 10], // Matching the bar values
//         backgroundColor: 'rgba(0, 191, 255, 0.8)', // Blue for main bars
//         borderRadius: 5, // Rounded bar edges
//         barPercentage: 0.9, // Increase bar width
//         categoryPercentage: 0.9, // Adjust category spacing
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false, // Hide legend
//       },
//       tooltip: {
//         enabled: true, // Enable tooltips on hover
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false, // Hide gridlines on X-axis
//         },
//         title: {
//           display: false,
//         },
//       },
//       y: {
//         ticks: {
//           stepSize: 10,
//           callback: (value) => `${value} (%)`, // Display percentage on Y-axis
//         },
//         max: 40, // Limit Y-axis to 40%
//         grid: {
//           drawBorder: true,
//           color: 'rgba(0, 0, 0, 0.1)', // Light gridlines
//         },
//       },
//     },
//   };

//   return (
//     <div
//       style={{
//         width: '350px', // Graph width
//         height: '300px', // Graph height
//         margin: '0 auto', // Center the graph
//         padding: '10px',
//         backgroundColor: '#f5f5f5', // Light background
//         borderRadius: '8px', // Rounded edges for the container
//       }}
//     >
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// const effortsChart = new Chart(firstChartRef.current, {
//   type: "bar",
//   data: {
//     labels: ["Workout"],
//     datasets: [
//       {
//         data: [20],
//         backgroundColor: "#cccccc",
//         borderColor: "#cccccc",
//         borderWidth: 1,
//       },
//       {
//         data: [15],
//         backgroundColor: "#347beb",
//         borderColor: "#347beb",
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     indexAxis: "y",
//     plugins: {
//       legend: { display: false },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//         ticks: { stepSize: 5, max: 30 },
//       },
//     },
//   },
// });

// // Numbers Horizontal Bar Chart
// const numbersChart = new Chart(secondChartRef.current, {
//   type: "bar",
//   data: {
//     labels: ["Workout"],
//     datasets: [
//       {
//         data: [200],
//         backgroundColor: "#cccccc",
//         borderColor: "#cccccc",
//         borderWidth: 1,
//       },
//       {
//         data: [180],
//         backgroundColor: "#347beb",
//         borderColor: "#347beb",
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     indexAxis: "y",
//     plugins: {
//       legend: { display: false },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//         ticks: { stepSize: 50, max: 300 },
//       },
//     },
//   },
// });

// // First Semi-circle doughnut chart
// const doughnutChart = new Chart(doughnutChartRef.current, {
//   type: "doughnut",
//   data: {
//     labels: ["Planned", "Actual"],
//     datasets: [
//       {
//         data: [70, 30],
//         backgroundColor: ["#347beb", "#cccccc"],
//         borderWidth: 0,
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     circumference: 180,
//     rotation: -90,
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: false },
//     },
//     cutout: "70%",
//   },
// });

// // Second Semi-circle doughnut chart
// const doughnutChart2 = new Chart(doughnutChartRef2.current, {
//   type: "doughnut",
//   data: {
//     labels: ["Planned", "Actual"],
//     datasets: [
//       {
//         data: [60, 40], // Different data for the second chart
//         backgroundColor: ["#28a745", "#cccccc"], // Different color scheme
//         borderWidth: 0,
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     circumference: 180,
//     rotation: -90,
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: false },
//     },
//     cutout: "70%",
//   },
// });

// charts.push(effortsChart, numbersChart, doughnutChart, doughnutChart2);

// return () => destroyCharts();
// }, []);

// return (
// <div>
//   {/* Bar Graphs Row */}
//   <div style={{ display: "flex", justifyContent: "center", gap: "40px", alignItems: "center" }}>
//     <div style={{ width: "45%", textAlign: "center" }}>
//       <h3>Workouts Planned vs WorkOut Actual (Efforts)</h3>
//       <canvas ref={firstChartRef} style={{ width: "100%", height: "100px" }}></canvas>
//     </div>
//     <div style={{ width: "45%", textAlign: "center" }}>
//       <h3>Workouts Planned vs WorkOut Actual (Efforts)</h3>
//       <canvas ref={secondChartRef} style={{ width: "100%", height: "100px" }}></canvas>
//     </div>
//   </div>


// export default FirstLevelGraph;
