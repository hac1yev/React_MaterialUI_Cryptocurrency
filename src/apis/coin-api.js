import axios from 'axios';

const COIN_URL = 'https://coinranking1.p.rapidapi.com/coin';

const options = {
    params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
    headers: {
      'X-RapidAPI-Key': 'b1b91afd29msh6e573e591a5c790p1baf61jsn47d60d4b1557',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};

export const fetchCoinApi = async (coinId) => {
    const response = await axios.get(`${COIN_URL}/${coinId}`, options);
    const { data } = response;
    return data;
};