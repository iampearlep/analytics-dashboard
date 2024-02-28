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
    maintainAspectRatio: true,
    aspectRatio: 0,
    responsive: true,
    scales: {
        x: {
            grid: {
               display: false,
              },
              border:{
                display: false,
              }
          },
          y: {
            display: true,
            border:{
                dash: [6, 4],
            },
            beginAtZero: true,
            ticks: {
              stepSize: 10000,
            },
            grid:{
                drawTicks: false,
            }
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
        borderRadius: {topLeft: 15, topRight: 15},
        data: [6000, 21000, 3000, 27000, 9000, 45000, 9000, 25000, 4000, 32000, 22000, 30000, 50000],
        backgroundColor: '#d8f5ee',
        hoverBackgroundColor: '#34caa5',
      }
    ],
  };
const MobileBarChart = () => {
  return (
    <div className='w-full'>
     <Bar width={400} options={options} data={data} />
    </div>
  )
}

export default MobileBarChart
