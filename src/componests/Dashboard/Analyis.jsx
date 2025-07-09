import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut } from 'react-chartjs-2'

const Analyis = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg">
      <h1 className="text-[6vw] md:text-[1.5vw] font-bold mb-[2vw] md:mb-[0.5vw]">Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 px-2">
        <div>
          <h1 className="text-lg md:text-xl font-bold">All Users</h1>
          <div className="w-full h-64">
            <Bar
              data={{
                labels: ['Recruiters', 'Sales Managers'],
                datasets: [
                  {
                    label: 'Users',
                    data: [12, 19],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.5)',
                      'rgba(54, 162, 235, 0.5)'
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                  }
                ]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { labels: { font: { size: 14 } } }
                }
              }}
              height={250}
            />
          </div>
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold">Types of Sales Managers</h1>
          <div className="flex justify-center items-center w-full h-64">
            <Doughnut
              data={{
                labels: ['Permanent', 'Contract'],
                datasets: [
                  {
                    label: 'Types of Sales Managers',
                    data: [10, 5],
                    backgroundColor: [
                      'rgba(255, 159, 64, 0.5)',
                      'rgba(75, 192, 192, 0.5)'
                    ],
                    borderColor: [
                      'rgba(255, 159, 64, 1)',
                      'rgba(75, 192, 192, 1)'
                    ]
                  }
                ]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { labels: { font: { size: 14 } } }
                }
              }}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analyis
