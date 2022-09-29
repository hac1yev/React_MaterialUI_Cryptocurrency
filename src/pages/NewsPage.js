import React,{ useState,useEffect } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { fetchCoinsApi } from '../apis/cryptos-api';
import { fetchNewsApi } from '../apis/news-api';
import moment from 'moment';

const demoImage = 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg';

const NewsPage = () => {
    const [searchNews,setSearchNews] = useState([]);
    const [selectedNews,setSelectedNews] = useState('');
    const [coins,setCoins] = useState([]);

    useEffect(() => {
        fetchCoinsApi('coins?limit=100').then((data) => setCoins(data.data.coins));
    }, []);

    useEffect(() => {
        fetchNewsApi(selectedNews).then((data) => setSearchNews(data.value))
    }, [selectedNews]);

    return (
        <Stack 
            direction='column'
            sx={{ width: '83%',padding: '15px' }}
        >
            <InputLabel id="demo-select-small">Bir kriptovalyuta seçin</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={selectedNews}
                onChange={(e) => setSelectedNews(e.target.value)}
                sx={{ width: '200px', height: '40px',marginTop: '5px' }}
            >
                {coins.map((coin) => (
                    <MenuItem key={coin.uuid} value={coin.name}>{coin.name}</MenuItem>
                ))}
            </Select>
            <div style={{ 
                width: '100%', 
                display: 'flex', 
                flexWrap:'wrap', 
                gap: '20px',
                marginTop: '20px' 
            }}>
                {searchNews.map((news,index) => (
                    <Card className='news-card' key={index} sx={{ width: '32%' }}>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                        <Typography variant='h5' sx={{ fontWeight: '900' }}>{news.name}</Typography>
                        <img src={news?.image?.thumbnail?.contentUrl ? news?.image?.thumbnail?.contentUrl : demoImage} height='100px' width='100px' alt="" />    
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">{news.description}</Typography>
                    </CardContent>
                    <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <Avatar 
                                    src={news?.provider[0]?.image?.thumbnail?.contentUrl ? news?.provider[0]?.image?.thumbnail?.contentUrl : demoImage} 
                                    height='40px' 
                                    width='40px' 
                                    alt="" 
                                />
                                <Typography sx={{ color: '#333' }} variant='subtitle2'>{news.provider[0]?.name}</Typography>
                            </div>
                            <Typography variant='subtitle1' sx={{ color: '#999' }}>{moment(news.datePublished).startOf('ss').fromNow()}</Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button href={news.url} target='_blank' rel="noopener noreferrer" size="large">Learn More</Button>
                    </CardActions>
                </Card>
                ))}
            </div>
        </Stack>
    );
};

export default NewsPage;