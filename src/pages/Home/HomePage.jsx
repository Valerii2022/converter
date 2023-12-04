import css from './Home.module.css';
import Select from 'react-select';
import { selectStyles } from './selectStyles';
import { useState } from 'react';
import axios from 'axios';

// https://exchangeratesapi.io/documentation/

const Home = () => {
  const [currencyIn, setCurrencyIn] = useState(0);
  const [currencyOut, setCurrencyOut] = useState(0);

  // const API_KEY = 'VTCLiMLNPGUnzwu7ny7tuLe8dNWU_EW2';
  // const BASE_URL = 'https://api.exchangeratesapi.io/v1/latest';
  // const params = {
  //   access_key: API_KEY,
  // };

  const currencyOptions = [
    { value: 'USD $', label: 'USD $' },
    { value: 'EUR €', label: 'EUR €' },
    { value: 'UAH ₴', label: 'UAH ₴' },
  ];

  const fetchExchange = async () => {
    const data = await axios.get(
      `https://api.polygon.io/v3/reference/exchanges?asset_class=options&apiKey=VTCLiMLNPGUnzwu7ny7tuLe8dNWU_EW2`
    );
    return data;
  };

  const handleBtnClick = async () => {
    await fetchExchange()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className={css.container}>
      <div className={css.exchangeWrapper}>
        <p>something</p>
      </div>
      <div className={css.converter}>
        <div className={css.converterInner}>
          <Select
            defaultValue={{ value: 'UAH ₴', label: 'UAH ₴' }}
            // onChange={e => setBrand(e.label)}
            // maxMenuHeight={272}
            placeholder="Currency"
            options={currencyOptions}
            styles={selectStyles}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
          <label>
            <input
              value={currencyIn}
              onChange={e => {
                setCurrencyIn(e.target.value);
                setCurrencyOut(e.target.value * 2);
              }}
              type="number"
              name="currencyIn"
            />
          </label>
        </div>
        <div className={css.converterInner}>
          <Select
            defaultValue={{ value: 'USD $', label: 'USD $' }}
            // onChange={e => setBrand(e.label)}
            maxMenuHeight={272}
            placeholder="Currency"
            options={currencyOptions}
            styles={selectStyles}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
          <label>
            <input
              value={currencyOut}
              onChange={e => {
                setCurrencyOut(e.target.value);
                setCurrencyIn(e.target.value / 2);
              }}
              type="number"
              name="currencyOut"
            />
          </label>
        </div>
      </div>
      <button onClick={() => handleBtnClick()}>Btn</button>
    </div>
  );
};

export default Home;
