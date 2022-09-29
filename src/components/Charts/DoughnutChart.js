import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Char as CharJS } from 'chart.js/auto';

const DoughnutChart = ({ top10Coins }) => {
    const coinNames = [];
    const marketCaps = [];

    for(const key in top10Coins){
        coinNames.push(top10Coins[key].name);
        marketCaps.push(top10Coins[key].marketCap);
    }

    const doughnutUserData = {
        labels: coinNames,
        datasets: [{
            data: marketCaps,
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
            borderWidth: 0.5
        }]
    };

    return (
        <div className='doughnut-chart'>
            <h3>İlk 10 kriptovalyutanın bazar dəyəri($)</h3>
            <Doughnut 
                data={doughnutUserData}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
};

export default DoughnutChart;