import axios from 'axios';

const options = {
    params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
    headers: {
      'X-RapidAPI-Key': 'b1b91afd29msh6e573e591a5c790p1baf61jsn47d60d4b1557',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};

export const fetchCoinHistoryApi = async (coinId,timePeriod) => {
    const response = await axios(`https://coinranking1.p.rapidapi.com/coin/${coinId}/history?timePeriod=${timePeriod}`, options);
    const { data } = response;
    return data;
};