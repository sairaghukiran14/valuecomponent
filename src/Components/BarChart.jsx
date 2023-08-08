import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  return (
    <div>
      <Bar data={props.data} />
    </div>
  );
};

export default BarChart;
