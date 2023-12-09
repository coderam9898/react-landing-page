// src/components/DynamicChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns'; // Import date-fns adapter
import { CategoryScale, LinearScale, BarController, BarElement } from 'chart.js'; // Import chart.js modules

const DynamicChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Dynamic Chart',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [],
      },
    ],
  });

  useEffect(() => {
    // Generate random data for demonstration
    const labels = Array.from({ length: 7 }, (_, index) => `Day ${index + 1}`);
    const data = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

    setChartData((prevChartData) => ({
      ...prevChartData,
      labels,
      datasets: [
        {
          ...prevChartData.datasets[0],
          data,
        },
      ],
    }));
  }, []);

  return (
    <div>
      <h2>Dynamic Chart</h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            x: {
              type: 'category', // Use category scale for x-axis
              labels: chartData.labels,
            },
            y: {
              type: 'linear',
              min: 0,
              max: 100,
            },
          },
        }}
      />
    </div>
  );
};

export default DynamicChart;
