import css from './Home.module.css';
import Select from 'react-select';
import { selectStyles } from './selectStyles';
import { useState } from 'react';
import { fetchExchange } from 'operations/fetchCurrencyExchange';

const Home = () => {
  const [rate, setRate] = useState(0);
  const [currencyIn, setCurrencyIn] = useState(0);
  const [currencyOut, setCurrencyOut] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');
  const [disabledFrom, setDisabledFrom] = useState(true);
  const [disabledTo, setDisabledTo] = useState(true);

  const currencyOptions = [
    { value: 'USD', label: 'USD $' },
    { value: 'EUR', label: 'EUR €' },
    { value: 'UAH', label: 'UAH ₴' },
    { value: 'CAD', label: 'CAD $' },
    { value: 'AUD', label: 'AUD $' },
    { value: 'PLN', label: 'PLN zł' },
    { value: 'DKK', label: 'DKK kr' },
  ];

  const fetchRate = async (from, to) => {
    await fetchExchange(from, to)
      .then(res => {
        setRate(res.data.rates[to].rate);
      })
      .catch(err => console.log(err));
  };

  const handleSelectFromChange = e => {
    setCurrencyFrom(e.value);
    setCurrencyIn(0);
    setCurrencyOut(0);
    if (currencyTo) {
      setDisabledFrom(false);
      setDisabledTo(false);
      fetchRate(e.value, currencyTo);
    }
  };

  const handleSelectToChange = e => {
    setCurrencyIn(0);
    setCurrencyOut(0);
    setCurrencyTo(e.value);
    if (currencyFrom) {
      setDisabledFrom(false);
      setDisabledTo(false);
      fetchRate(currencyFrom, e.value);
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Currency exchange converter</h2>
      <div className={css.converterWrapper}>
        <div className={css.converter}>
          <div className={css.converterInner}>
            <Select
              onChange={handleSelectFromChange}
              placeholder="Select currency from"
              options={currencyOptions}
              styles={selectStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
            <label>
              <input
                disabled={disabledFrom}
                value={currencyIn}
                onChange={e => {
                  setCurrencyIn(e.target.value);
                  setCurrencyOut((e.target.value * rate).toFixed(2));
                }}
                type="number"
                name="currencyIn"
              />
            </label>
          </div>
        </div>
        <div className={css.converter}>
          <div className={css.converterInner}>
            <Select
              onChange={handleSelectToChange}
              placeholder="Select currency to"
              options={currencyOptions}
              styles={selectStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
            <label>
              <input
                disabled={disabledTo}
                value={currencyOut}
                onChange={e => {
                  setCurrencyOut(e.target.value);
                  setCurrencyIn((e.target.value / rate).toFixed(2));
                }}
                type="number"
                name="currencyOut"
              />
            </label>
          </div>
        </div>
      </div>
      <h2 className={css.title}>Exchange rates</h2>
    </div>
  );
};

export default Home;
