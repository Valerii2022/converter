import css from './Home.module.css';
import Select from 'react-select';
import { selectStyles } from './selectStyles';

const Home = () => {
  const currencyOptions = [
    { value: 'USD $', label: 'USD $' },
    { value: 'EUR €', label: 'EUR €' },
    { value: 'UAH ₴', label: 'UAH ₴' },
  ];

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
            <input type="number" />
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
            <input type="number" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home;
