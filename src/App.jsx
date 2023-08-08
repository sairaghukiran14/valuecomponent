import "./App.css";
import BarChart from "./Components/BarChart";
import PieChart from "./Components/PieChart";
import LineChart from "./Components/LineChart";
function App() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "My First dataset ",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  const Piedata = {
    labels: ["Go", "Python", "Kotlin", "JavaScript", "R", "Swift"],
    datasets: [
      {
        label: "# of Votes",
        data: [35, 25, 22, 20, 18, 15],
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="App ">
      <div className="header text-xl font-semibold mt-2 bg-orange-300 rounded p-2">
        Value is passed from One Component to Another Component
      </div>
      <div className="charts flex justify-evenly wrap items-center w-full gap-3 mt-3">
        <LineChart data={data} className="p-3" />
        <BarChart data={data} className="" />
        <PieChart data={Piedata} className="" />
      </div>
      <div className="note text-sm font-semibold rounded bg-green-300 p-2 mt-3">
        Data is passed from App Component to LineChart,BarChart and PieChart
        Component
      </div>
    </div>
  );
}

export default App;
