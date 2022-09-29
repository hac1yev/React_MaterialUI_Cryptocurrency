import React,{ useState,useEffect } from 'react';
import Carousel from '../components/Carousel';
import LineChart from '../components/Charts/LineChart';
import { fetchCoinsApi } from '../apis/cryptos-api';
import DoughnutChart from '../components/Charts/DoughnutChart';
import BarChart from '../components/Charts/BarChart';
import { Typography } from '@mui/material';

const Homepage = () => {
    const [coins,setCoins] = useState([]);
    const [top10Coins,setTop10Coins] = useState([]);

    useEffect(() => {
        fetchCoinsApi('coins?limit=50').then((data) => setCoins(data.data.coins));
    }, []);

    useEffect(() => {
        fetchCoinsApi('coins?limit=10').then((data) => setTop10Coins(data.data.coins));
    }, []);

    return (
        <div className='homepage'>
            <Carousel topCoins={top10Coins} />
            <Typography variant='h5' sx={{ marginTop: '30px', fontWeight: '900' }}>Ümumi kriptovalyuta statistikaları</Typography>
            <div className='charts'>
                <LineChart coins={coins} />
                <DoughnutChart top10Coins={top10Coins} />
            </div>
            <div className='charts'>
                <BarChart top10Coins={top10Coins} />
            </div>
        </div>
    );
};

export default Homepage;