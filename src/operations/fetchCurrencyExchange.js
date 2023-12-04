import axios from 'axios';

const API_KEY = '285b0f82ff5b8fb63ad4fb49b2dc6c3cfe35ab01';

export const fetchExchange = async (currencyFrom, currencyTo) => {
  const data = await axios.get(
    `https://api.getgeoapi.com/v2/currency/convert?api_key=${API_KEY}&from=${currencyFrom}&to=${
      currencyTo || 'UAH'
    }`
  );
  return data;
};

export const fetchRates = async () => {
  const data = await axios.get(
    `https://api.getgeoapi.com/v2/currency/convert?api_key=${API_KEY}`
  );
  return data;
};
