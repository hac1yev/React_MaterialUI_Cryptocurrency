import { Typography } from '@mui/material';
import React from 'react';
import AliceCarousel from "react-alice-carousel";
import { useHistory } from 'react-router-dom';

const Carousel = ({ topCoins }) => {
    const history = useHistory()

    const top10Coins = topCoins.map((coin) => (
        <div className='coin-card' onClick={() => history.push(`/coin/${coin.uuid}`)}>
            <div className='coin-card-header'>
                <div className='coin-image'>
                    <img src={coin.iconUrl} alt={coin.name} />
                </div>
                <h2 style={{ color: coin.color }}>{coin.name}</h2>
            </div>
            <div className='coin-text'>
                <div>
                    <strong>Price:&nbsp;</strong> 
                    <p>{Number(coin.price).toFixed(2)}$</p>
                </div>
                <div>
                    <strong>Daily Change:&nbsp;</strong> 
                    <p className={Number(coin.change) > 0 ? 'benefit' : 'damage'}>
                        {Number(coin.change) > 0 ? '+' : ''}{coin.change}%
                    </p>
                </div>  
            </div>
        </div>
    ));    

    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2,
        },
        1024: {
            items: 4,
        },
    };

    return (
        <div className='carousel'>
            <Typography variant='h5' sx={{ fontWeight: '900' }}>Dünyanın ən dəyərli 10 criptovalyutası</Typography>
            <AliceCarousel 
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableButtonsControls
                disableDotsControls
                items={top10Coins}
                responsive={responsive}
                autoPlay
            />
        </div>
    );
};

export default Carousel;