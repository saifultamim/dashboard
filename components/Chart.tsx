"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ChartComp = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let myChart: Chart | null = null;

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Destroy existing chart instance if it exists
    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Users",
            data: [10, 30, 20, 50, 40, 60, 80],
            borderColor: "#3b82f6", // Tailwind Blue-500
            backgroundColor: "rgba(59, 130, 246, 0.2)", // Light Blue fill
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true },
        },
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div className=" w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="text-3xl font-bold text-gray-900 dark:text-white pb-2">
            32.4k
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Users this week
          </p>
        </div>
        <div className="flex items-center text-base font-semibold text-green-500">
          12%
          <svg
            className="w-3 h-3 ms-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="w-full h-60">
        <canvas ref={chartRef} id="line-chart"></canvas>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-5 pt-5 flex justify-between items-center">
        <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center">
          Last 7 days
          <svg
            className="w-2.5 ms-1.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <a
          href="#"
          className="uppercase text-sm font-semibold text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 flex items-center px-3 py-2"
        >
          Users Report
          <svg
            className="w-2.5 h-2.5 ms-1.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ChartComp;
