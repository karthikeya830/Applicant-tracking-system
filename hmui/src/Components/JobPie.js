import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const JobSummary = () => {
  const totalJobs = 56;
  const pieData = {
    labels: ["Applied", "Interviewing", "Offered", "Closed"],
    datasets: [
      {
        data: [50, 25, 25, 25],
        backgroundColor: ["#4CAF50", "#FDD835", "#F44336", "#FBC02D"],
        hoverBackgroundColor: ["#2E7D32", "#FBC02D", "#D32F2F", "#4CAF50"],
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    cutout: "85%",
    // legend: {
    //   position: "bottom",
    //   labels: {
    //     fontColor: "#ffffff",
    //     fontSize: 5,
    //   },
    // },
    tooltips: {
      callbacks: {
        // label: function (tooltipItem, data) {
        //   // let label = data.labels[tooltipItem.index];
        //   // let value =
        //   // data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        //   // return `${label}: ${value}%`;
        // },
      },
    },

    elements: {
      arc: {
        borderWidth: 1,
      },
    },
    cutoutPercentage: 10,
    radius: ["82%"],
  };

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white mr-4 h-96 pb-3">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="font-bold text-lg">Job Summary</h2>
        <button className="text-sm font-semibold text-gray-600 hover:text-gray-800">View All</button>
      </div>
      <hr></hr>
      <div className="flex-col items-center">
        <div className="text-center">
          <p className="text-gray-600">Total Jobs</p>
          <h3 className="text-5xl font-semibold">{totalJobs}</h3>
          <br />
        </div>
        <div className="mt-1 w-full h-60 flex">
          <Doughnut data={pieData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default JobSummary;
