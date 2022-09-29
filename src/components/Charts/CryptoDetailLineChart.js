import React from 'react';
import { Line } from 'react-chartjs-2';
import { Char as CharJS } from 'chart.js/auto';

const CryptoDetailLineChart = ({ coinHistory }) => {
    const coinPrice = [];
    const coinTimeStamp = [];

    for(let i=0; i<coinHistory.length; i++){
        coinPrice.push(coinHistory[i].price)
    }

    for(let i=0; i<coinHistory.length; i++){
        coinTimeStamp.push(new Date(coinHistory[i].timestamp).toLocaleDateString())
    }

    const lineUserData = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    return (
            <Line 
                data={lineUserData}
                options={{
                    maintainAspectRatio: false,
                }}
            />
    );
};

export default CryptoDetailLineChart;