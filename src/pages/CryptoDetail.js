import React,{ useState,useEffect } from 'react';
import { MenuItem, Select, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchCoinApi } from '../apis/coin-api';
import CryptoDetailLineChart from '../components/Charts/CryptoDetailLineChart';
import { fetchCoinHistoryApi } from '../apis/coinHistory-api';
import { AttachMoney,Numbers,FlashOn,EmojiEvents,ConfirmationNumber,CurrencyExchange,Check,Close,GppMaybe } from '@mui/icons-material';

const CryptoDetail = () => {
  const [coinHistory,setCoinHistory] = useState([]);
  const [coin,setCoin] = useState([]);
  const [timePeriod,setTimePeriod] = useState('24h');
  const params = useParams();
  const { Id } = params;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    fetchCoinApi(Id).then((data) => setCoin(data.data.coin));
  }, [Id]);

  useEffect(() => {
    fetchCoinHistoryApi(Id,timePeriod).then((data) => setCoinHistory(data.data.history));
  }, [Id,timePeriod]);

  const stats = [
    { title: 'Price to USD', value: `$ ${Number(coin?.price).toFixed(2)}`, icon: <AttachMoney /> },
    { title: 'Rank', value: coin?.rank, icon: <Numbers /> },
    { title: '24h Volume', value: `$ ${numberWithCommas(Number(coin['24hVolume']))}`, icon: <FlashOn /> },
    { title: 'Market Cap', value: `$ ${numberWithCommas(Number(coin?.marketCap))}`, icon: <AttachMoney /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${numberWithCommas(Number(coin?.allTimeHigh?.price).toFixed(2))}`, icon: <EmojiEvents /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: coin?.numberOfMarkets, icon: <ConfirmationNumber /> },
    { title: 'Number Of Exchanges', value: coin?.numberOfExchanges, icon: <CurrencyExchange /> },
    { title: 'Aprroved Supply', value: coin?.supply?.confirmed ? <Check/> : <Close/>, icon: <GppMaybe /> },
    { title: 'Total Supply', value: `$ ${Number(coin?.supply?.total).toFixed(2)}`, icon: <GppMaybe /> },
    { title: 'Circulating Supply', value: `$ ${Number(coin?.supply?.circulating).toFixed(2)}`, icon: <GppMaybe /> },
  ];

  return (
    <Stack
      sx={{ width: '83%', minHeight: '92vh', display:'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div className='coin-detail-header'>
          <Typography variant='h4' color='primary' sx={{ fontWeight: '600' }}>{coin.name}({coin.symbol})</Typography>
          <Typography variant='subtitle1' color='gray' >ABŞ Dolları ilə {coin.name} canlı qiyməti. Qiymət statistikaları, bazar dəyərləri və təkliflər.</Typography>
      </div>
      <div className='select-timeperiod'>
        <div>
          <Select
            size='small'
            labelId="demo-select-small"
            id="demo-select-small"
            value={timePeriod}
            sx={{ width: '200px' }}
            onChange={(e) => setTimePeriod(e.target.value)}
          >
            <MenuItem value='24h'>Son 24 Saat</MenuItem>
            <MenuItem value='7d'>Son 7 Gün</MenuItem>
            <MenuItem value='30d'>Son 30 Gün</MenuItem>
          </Select>
          <Typography mt={1} variant='h4' color='primary' >{coin.name} Qiymət Cədvəli</Typography>
        </div>
        <div className='coin-detail-change-price'>
          <div style={{ display: 'flex', gap: '15px', fontWeight: '900', fontSize: '19px' }}>Dəyişiklik: <p style={{color: coin.change > 0 ? 'rgb(14, 203, 129)' : 'red'}}>{coin.change > 0 ? '+' : ''}{coin.change}%</p></div>
          <div style={{ display: 'flex', gap: '15px', fontWeight: '900', fontSize: '19px' }}>Hazırki {coin.name} Qiyməti: <p style={{fontStyle: 'italic', fontWeight: '100'}}>${Number(coin.price).toFixed(2)}</p></div>
        </div>
      </div>
      <div className='crypto-detail-line-chart'>
        <CryptoDetailLineChart coinHistory={coinHistory} />
      </div>
      <div className='coin-information'>
        <div style={{ width: '45%' }}>
          <Typography variant='h5' color='primary' sx={{ fontWeight: '900' }}>{coin.name} Dəyər Statistikası</Typography>
          {stats.map((stat,index) => (
            <div key={index} className='flex' style={{ borderBottom: '1px solid #ccc',padding: '20px 0',marginTop: '10px' }}>
              <div style={{ display: 'flex',alignItems: 'center', gap: '8px', color: '#333' }} >
                <div style={{fontSize: '18px'}}>
                  {stat.icon}
                </div>
                <p style={{fontSize: '18px'}}>{stat.title}</p>
              </div>
              <p style={{ fontWeight: '900',fontSize: '18px' }}>{stat.value}</p>
            </div>
          ))}
        </div>
        <div style={{ width: '45%' }}>
          <Typography variant='h5' color='primary' sx={{ fontWeight: '900' }}>Digər Statistikalar</Typography>
          {genericStats.map((stat,index) => (
            <div key={index} className='flex' style={{ borderBottom: '1px solid #ccc',padding: '20px 0',marginTop: '10px' }}>
              <div style={{ display: 'flex',alignItems: 'center', gap: '8px', color: '#333' }} >
                <div style={{fontSize: '18px'}}>
                  {stat.icon}
                </div>
                <p style={{fontSize: '18px'}}>{stat.title}</p>
              </div>
              <p style={{ fontWeight: '900',fontSize: '18px' }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Stack>
  );
};

export default CryptoDetail;