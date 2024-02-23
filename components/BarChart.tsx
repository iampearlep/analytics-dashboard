"use client"
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
 
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
               display: false,
              }
          },
          y: {
            display: true,
            beginAtZero: true,
            ticks: {
              stepSize: 10000,
            },
          },
      },
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: '',
        barPercentage: 0.5,
        barThickness: 30,
        borderRadius: {topLeft: 15, topRight: 15},
        maxBarThickness: 38,
        minBarLength: 10,
        data: [6000, 21000, 3000, 27000, 9000, 45000, 9000, 25000, 4000, 32000, 22000, 30000, 50000],
        backgroundColor: '#d8f5ee',
        hoverBackgroundColor: '#34caa5',
      }
    ],
  };
  
const BarChart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart
