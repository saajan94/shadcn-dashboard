"use client";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
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
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const PieChart = () => {
  const uv_sum = data
    .map((month) => month.uv)
    .reduce((partialSum, a) => partialSum + a, 0);

  const pv_sum = data
    .map((month) => month.pv)
    .reduce((partialSum, a) => partialSum + a, 0);

  const [lineData, setLineData] = useState({
    labels: ["Unique Views", "Page Views"],
    datasets: [
      {
        label: "Unique Views",
        data: [uv_sum, pv_sum],
        backgroundColor: [
          "#ff5733", // Coral
          "#3498db", // Dodger Blue
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
      //   {
      //     label: "Page Views",
      //     data: [pv_sum],
      //     // backgroundColor: ["red", "blue"],
      //     backgroundColor: "#3498db",
      //     borderColor: "black",
      //     borderWidth: 2,
      //   },
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
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Analytics For This Year</CardTitle>
          <CardDescription>Total Views</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 300 }}>
            <Pie options={options} data={lineData}></Pie>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PieChart;
