import axios from 'axios';

axios.defaults.baseURL = 'https://api.getgeoapi.com/v2/currency';
const API_KEY = '285b0f82ff5b8fb63ad4fb49b2dc6c3cfe35ab01';

export const fetchRates = async () => {
  const data = await axios.get(`/convert?api_key=${API_KEY}&from=UAH`);
  return data;
};
