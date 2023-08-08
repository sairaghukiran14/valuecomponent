import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function PieChart(props) {
  return (
    <div style={{ width: 650, textAlign: "center" }}>
      <h1 style={{ fontFamily: "monospace" }}>
        Most Popular Programming languages to learn in 2022
      </h1>
      <Pie data={props.data} width={50} height={50} />
    </div>
  );
}
