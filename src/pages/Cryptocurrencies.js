import { Stack,Typography,TextField, TableContainer, LinearProgress, Table, TableHead, TableCell, TableRow, TableBody, Pagination } from '@mui/material';
import React,{ useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchCoinsApi } from '../apis/cryptos-api';

const Cryptocurrencies = () => {
    const [coins,setCoins] = useState([]);
    const [search,setSearch] = useState('');
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const history = useHistory();

    const tableHeader = ['Kriptovalyuta', 'Qiymət($)', 'Qiymət fərqi(%)', 'Bazar dəyəri($)'];

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        setLoading(true);
        fetchCoinsApi('coins?limit=100').then(data => setCoins(data.data.coins));
        setLoading(false);
    }, []);

    const handleSearch = () => {
        return coins.filter(
            (coin) => 
                coin.name.toLowerCase().includes(search) ||
                coin.symbol.toLowerCase().includes(search)
        );
    };

    return (
        <Stack 
            sx={{ minHeight: '92vh',display: 'flex', flexDirection: 'column', alignItems: 'center', width: '83%',padding: '10px' }}
        >
            <Typography 
                variant='h4'
                sx={{ margin: '18px', fontFamily: 'Montserrat' }}
            >
                Cryptocurrency Prices by Market Cap
            </Typography>
            <TextField 
                label='Search for a cryptoCurrency...' 
                variant='outlined' 
                sx={{
                    margin: '10px 0',
                    width: '80%'
                }}
                onChange={(e) => setSearch(e.target.value)}
            />
            <TableContainer>
                {
                    loading ? (
                        <LinearProgress />
                    ) : (
                        <Table>
                            <TableHead 
                                sx={{ backgroundColor: 'black' }}
                            >
                            <TableRow>
                                {tableHeader.map((header,index) => (
                                    <TableCell 
                                        key={index} 
                                        align={header === 'Kriptovalyuta' ? 'left' : 'right'} 
                                        sx={{ color: '#fff', fontWeight: '900', fontFamily: 'Montserrat', fontSize: '16px' }}
                                    >
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {handleSearch().slice(((page-1)*10),(page*10)).map((row) => {
                                    const profit = row.change > 0;

                                    return (
                                        <TableRow
                                            className='crypto-item'
                                            onClick={() => history.push(`/coin/${row.uuid}`)}
                                            key={row.uuid}
                                            sx={{ backgroundColor: '#fff', cursor: 'pointer', }}
                                        >
                                            <TableCell
                                                style={{
                                                    display: "flex",
                                                    gap: 15,
                                                }}
                                            >
                                            <img
                                                src={row?.iconUrl}
                                                alt={row.name}
                                                height="40"
                                                style={{ marginBottom: 10 }}
                                            />
                                            <div
                                                style={{ display: "flex", flexDirection: "column" }}
                                            >
                                                <span
                                                    style={{
                                                        textTransform: "uppercase",
                                                        fontSize: 19,
                                                    }}
                                                >
                                                    {row.symbol}
                                                </span>
                                                <span style={{ color: "darkgrey" }}>
                                                    {row.name}
                                                </span>
                                            </div>
                                            </TableCell>
                                            <TableCell align="right">
                                                {Number(row.price).toFixed(2)}$
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{
                                                    color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {profit && "+"}
                                                {Number(row.change).toFixed(2)}%
                                            </TableCell>
                                            <TableCell align="right">
                                                {numberWithCommas( row.marketCap.toString())}$
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    )
                }
            </TableContainer>
            <Pagination 
                sx={{ padding: '15px' }} 
                count={(Number(handleSearch().length)/10).toFixed(0)} 
                color="primary" 
                onChange={(_, value) => setPage(value)}
            />
        </Stack>
    );
};

export default Cryptocurrencies;