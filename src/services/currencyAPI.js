import axios from 'axios';
axios.defaults.baseURL = 'https://api.privatbank.ua/p24api';

export const fetchCurrencyRates = () => {
  return axios.get('/pubinfo?exchange&json&coursid=11');
};
