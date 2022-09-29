import axios from 'axios';

const CRYPTO_BASE_URL = 'https://coinranking1.p.rapidapi.com';

const options = {
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'b1b91afd29msh6e573e591a5c790p1baf61jsn47d60d4b1557',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};

export const fetchCoinsApi = async (url) => {
  const response = await axios.get(`${CRYPTO_BASE_URL}/${url}`, options);
  const { data } = response;
  return data;
};