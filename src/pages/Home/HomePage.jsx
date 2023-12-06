import css from './Home.module.css';
import Select from 'react-select';
import { selectStyles } from './selectStyles';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Home = prop => {
  const [rate, setRate] = useState(0);
  const [currencyIn, setCurrencyIn] = useState(0);
  const [currencyOut, setCurrencyOut] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');
  const [disabledFrom, setDisabledFrom] = useState(true);
  const [disabledTo, setDisabledTo] = useState(true);

  const currentValue = [];
  const currentRates = [];

  const currencyOptions = [
    { value: 'USD', label: 'USD $' },
    { value: 'EUR', label: 'EUR €' },
    { value: 'UAH', label: 'UAH ₴' },
    { value: 'CAD', label: 'CAD $' },
    { value: 'AUD', label: 'AUD $' },
    { value: 'PLN', label: 'PLN zł' },
    { value: 'DKK', label: 'DKK kr' },
  ];

  currencyOptions.forEach(el => {
    if (el.value !== 'UAH') {
      currentValue.push(el.value);
    }
  });

  for (const key in prop.rates) {
    currentRates.push({
      name: key,
      title: prop.rates[key].currency_name,
      rate: (1 / prop.rates[key].rate).toFixed(4),
    });
  }

  const handleSelectFromChange = e => {
    setCurrencyFrom(e.value);
    setCurrencyIn(0);
    setCurrencyOut(0);
    if (currencyTo) {
      setDisabledFrom(false);
      setDisabledTo(false);
    }
  };

  const handleSelectToChange = e => {
    setCurrencyIn(0);
    setCurrencyOut(0);
    setCurrencyTo(e.value);
    if (currencyFrom) {
      setDisabledFrom(false);
      setDisabledTo(false);
    }
  };

  const convert = () => {
    const rateFrom = currentRates.find(el => {
      if (el.name === currencyFrom) {
        return el.rate;
      }
      return 0;
    });
    const rateTo = currentRates.find(el => {
      if (el.name === currencyTo) {
        return el.rate;
      }
      return 0;
    });
    setRate(rateFrom.rate / rateTo.rate);
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
                  convert();
                  setCurrencyOut((e.target.value * rate).toFixed(2));
                }}
                type="number"
                min={0}
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
                min={0}
                name="currencyOut"
              />
            </label>
          </div>
        </div>
      </div>
      <h2 className={css.title}>Exchange rates</h2>
      <div className={css.tableWrapper}>
        <table className={css.ratesList}>
          <thead>
            <tr className={css.ratesHeader}>
              <th>Currency</th>
              <th>Code</th>
              <th>UAH</th>
            </tr>
          </thead>
          <tbody>
            {currentRates.map(el => {
              return (
                <tr key={nanoid(6)} className={css.ratesItem}>
                  <td>{el.title}</td>
                  <td>{el.name}</td>
                  <td>{el.rate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
