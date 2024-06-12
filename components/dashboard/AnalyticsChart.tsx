"use client";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import data from "@/data/analytics";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
  const [lineData, setLineData] = useState({
    labels: data.map((month) => month.name),
    datasets: [
      {
        label: "Unique Views",
        data: data.map((month) => month.uv),
        backgroundColor: [
          "#ff5733", // Coral
          //   "#3498db", // Dodger Blue
          //   "#2ecc71", // Emerald
          //   "#9b59b6", // Amethyst
          //   "#e74c3c", // Alizarin
          //   "#1abc9c", // Turquoise
          //   "#f1c40f", // Sunflower
          //   "#34495e", // Wet Asphalt
          //   "#f39c12", // Orange
          //   "#2980b9", // Belize Hole
          //   "#27ae60", // Nephritis
          //   "#8e44ad", // Wisteria
        ],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Page Views",
        data: data.map((month) => month.pv),
        // backgroundColor: ["red", "blue"],
        backgroundColor: "#3498db",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics For This Year</CardTitle>
          <CardDescription>Views Per Month</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 300 }}>
            <Line options={options} data={lineData}></Line>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsChart;
