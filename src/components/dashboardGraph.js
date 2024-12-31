import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const DashboardGraphs = () => {
  const firstChartRef = useRef(null);
  const secondChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const doughnutChartRef2 = useRef(null); // Ref for the second doughnut chart

  useEffect(() => {
    const charts = [];
    const destroyCharts = () => charts.forEach((chart) => chart.destroy());

    // Efforts Horizontal Bar Chart
    const effortsChart = new Chart(firstChartRef.current, {
      type: "bar",
      data: {
        labels: ["Workout"],
        datasets: [
          {
            data: [20],
            backgroundColor: "#cccccc",
            borderColor: "#cccccc",
            borderWidth: 1,
          },
          {
            data: [15],
            backgroundColor: "#347beb",
            borderColor: "#347beb",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: "y",
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: { stepSize: 5, max: 30 },
          },
        },
      },
    });

    // Numbers Horizontal Bar Chart
    const numbersChart = new Chart(secondChartRef.current, {
      type: "bar",
      data: {
        labels: ["Workout"],
        datasets: [
          {
            data: [200],
            backgroundColor: "#cccccc",
            borderColor: "#cccccc",
            borderWidth: 1,
          },
          {
            data: [180],
            backgroundColor: "#347beb",
            borderColor: "#347beb",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: "y",
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: { stepSize: 50, max: 300 },
          },
        },
      },
    });

    // First Semi-circle doughnut chart
    const doughnutChart = new Chart(doughnutChartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Planned", "Actual"],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ["#347beb", "#cccccc"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        circumference: 180,
        rotation: -90,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        cutout: "70%",
      },
    });

    // Second Semi-circle doughnut chart
    const doughnutChart2 = new Chart(doughnutChartRef2.current, {
      type: "doughnut",
      data: {
        labels: ["Planned", "Actual"],
        datasets: [
          {
            data: [60, 40], // Different data for the second chart
            backgroundColor: ["#28a745", "#cccccc"], // Different color scheme
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        circumference: 180,
        rotation: -90,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        cutout: "70%",
      },
    });

    charts.push(effortsChart, numbersChart, doughnutChart, doughnutChart2);

    return () => destroyCharts();
  }, []);

  return (
    <div>
      {/* Bar Graphs Row */}
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", alignItems: "center" }}>
        <div style={{ width: "45%", textAlign: "center" }}>
          <h3>Workouts Planned vs WorkOut Actual (Efforts)</h3>
          <canvas ref={firstChartRef} style={{ width: "100%", height: "100px" }}></canvas>
        </div>
        <div style={{ width: "45%", textAlign: "center" }}>
          <h3>Workouts Planned vs WorkOut Actual (Efforts)</h3>
          <canvas ref={secondChartRef} style={{ width: "100%", height: "100px" }}></canvas>
        </div>
      </div>

      {/* Semi-Circle Doughnut Charts Row */}
      <div style={{ marginTop: "90px", display: "flex", justifyContent: "center", gap: "40px" ,}}>
        {/* First Semi-Circle Doughnut Chart */}
        <div
          style={{
            width: "300px",
            height: "150px", // Half the height for a semi-circle
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h3
          style={{
          position: "relative", // Make the title adjustable without impacting the layout
          top: "-70px",         // Move the title up
            }}
          >
          Plan vs Actual Workout On Time
          </h3>
          <canvas
            ref={doughnutChartRef}
            style={{
              width: "300px",
              height: "300px",
              transform: "translateY(-50%)",
            }}
          ></canvas>
          <p style={{
          position: "relative", // Make the title adjustable without impacting the layout
          top: "-70px",         // Move the title up
            }}>Level of Completion (First)</p>
        </div>

        {/* Second Semi-Circle Doughnut Chart */}
        <div
          style={{
            width: "300px",
            height: "150px", // Half the height for a semi-circle
            margin: "0 auto",
            textAlign: "center",
            
          }}
        >
          <h3
          style={{
          position: "relative", // Make the title adjustable without impacting the layout
          top: "-70px",         // Move the title up
            }}
          >
          Plan vs Actual Workout On Time
          </h3>
          <canvas
            ref={doughnutChartRef2}
            style={{
              width: "300px",
              height: "300px",
              transform: "translateY(-50%)",
            }}
          ></canvas>
          <p style={{
          position: "relative", // Make the title adjustable without impacting the layout
          top: "-70px",         // Move the title up
            }}>Level of Completion (Second)</p>
        </div>
      </div>
      <div>
  {/* Table Section */}
  <table
    style={{
      width: "80%",
      margin: "40px auto",
      borderCollapse: "collapse",
      textAlign: "center",
    }}
  >
    <thead>
      <tr>
        <th
          style={{
            backgroundColor: "#77e39c",
            padding: "10px",
            border: "1px solid #ddd",
            color: "#000",
          }}
        >
          #
        </th>
        <th
          style={{
            backgroundColor: "#77e39c",
            padding: "10px",
            border: "1px solid #ddd",
            color: "#000",
          }}
        >
          Type
        </th>
        <th
          style={{
            backgroundColor: "#77e39c",
            padding: "10px",
            border: "1px solid #ddd",
            color: "#000",
          }}
        >
          Workouts
        </th>
        <th
          style={{
            backgroundColor: "#77e39c",
            padding: "10px",
            border: "1px solid #ddd",
            color: "#000",
          }}
        >
          Focus Area
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          style={{
            backgroundColor: "#fef3d2",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          1
        </td>
        <td
          style={{
            backgroundColor: "#fef3d2",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          Prosperous Workouts
        </td>
        <td
          style={{
            backgroundColor: "#fef3d2",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          Push-Ups <br />
          Hammer Curls <br />
          Plank
        </td>
        <td
          style={{
            backgroundColor: "#fef3d2",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          Chest & Triceps <br />
          Back & Biceps Focus
        </td>
      </tr>
      <tr>
        <td
          style={{
            backgroundColor: "#f8d7da",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          2
        </td>
        <td
          style={{
            backgroundColor: "#f8d7da",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          Challenging Workouts
        </td>
        <td
          style={{
            backgroundColor: "#f8d7da",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          Pull-Ups <br />
          Quadriceps
        </td>
        <td
          style={{
            backgroundColor: "#f8d7da",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          Biceps, Forearms & Triceps <br />
          Squats, Lunges, Leg Presses
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
};

export default DashboardGraphs;
