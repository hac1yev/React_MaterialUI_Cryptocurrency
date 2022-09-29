import React from 'react';
import { Line } from 'react-chartjs-2'; 
import { Char as CharJS } from 'chart.js/auto';

const LineChart = ({ coins }) => {
  const coinNames = [];
  const coinPrices = [];

  for(const key in coins){
    coinNames.push(coins[key].name);
    coinPrices.push(coins[key].change);
  };
  
  const lineUserData = {
    labels: coinNames,
    datasets: [{
      data: coinPrices,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(205, 109, 34, 0.7)',
        'rgba(53, 12, 155, 0.7)',
        'rgba(250, 19, 164, 0.7)',
        'rgba(215, 99, 44, 0.7)',
    ],
      borderColor: 'black',
      borderWidth: 0.5,
    }]
  };
 
  return (
    <div className='line-chart'>
      <h3>Kriptovalyutaların gündəlik qiymət dəyişikliyinin faizlərlə göstəricisi(%)</h3>
        <Line 
          data={lineUserData}
          options={{
            maintainAspectRatio: false,
            animations: {
              tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
              }
            }
          }}
        />
    </div>
  );
};

export default LineChart;