import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  return (
    <div>
      <Line data={props.data} />
    </div>
  );
};

export default LineChart;
