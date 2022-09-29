import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Char as CharJS } from 'chart.js/auto';

const BarChart = ({ top10Coins }) => {
    const coinNames = [];
    const Volume_24h = [];

    for(const key in top10Coins){
        coinNames.push(top10Coins[key].name);
        Volume_24h.push(top10Coins[key]['24hVolume']);
    }

    const barUserData = {
        labels: coinNames,
        datasets: [{
            data: Volume_24h,
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
        <div className='bar-chart'>
            <h3>Son 24 saatda ilk 10 kriptovalyutanın bazar həcmi(24hVolume)</h3>
            <Bar 
                data={barUserData}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
};

export default BarChart;