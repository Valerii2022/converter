import axios from 'axios';

const API_KEY = '285b0f82ff5b8fb63ad4fb49b2dc6c3cfe35ab01';
const BASE_URL = 'https://api.getgeoapi.com/v2/currency/';

export const fetchExchange = async (currencyFrom, currencyTo) => {
  const data = await axios.get(
    `${BASE_URL}convert?api_key=${API_KEY}&from=${currencyFrom}&to=${
      currencyTo || 'UAH'
    }`
  );
  return data;
};

export const fetchRates = async () => {
  const data = await axios.get(
    `${BASE_URL}convert?api_key=${API_KEY}&from=UAH`
  );
  return data;
};
