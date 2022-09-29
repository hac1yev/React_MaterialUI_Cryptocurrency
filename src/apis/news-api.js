import axios from 'axios';

const BASE_NEWS_URL = 'https://bing-news-search1.p.rapidapi.com/news/search';

const options = {
  params: { freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'b1b91afd29msh6e573e591a5c790p1baf61jsn47d60d4b1557',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};

export const fetchNewsApi = async (searchParametr) => {
  const response = await axios.get(`${BASE_NEWS_URL}?q=${searchParametr}&count=12`, options);
  const { data } = response;
  return data;
};