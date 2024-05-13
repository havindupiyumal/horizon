"use client";
import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend)

function DoughnutChart({ accounts }: DoughnutChartProps) {

  const data = {
    datasets: [
        {
            labale: 'Banks',
            data: [1250, 2500, 3790],
            backgroundColor: ['#0747b6', '#2265d8', "#2f91fa"]
        }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }  

  return (
    <div>
        <Doughnut
            className='h-28 w-28'
            data={data} 
            options={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
        />
    </div>
  )
}

export default DoughnutChart;