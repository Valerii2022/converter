import css from './Header.module.css';
import { fetchExchange } from 'operations/fetchCurrencyExchange';
import { useEffect, useState } from 'react';
import { ReactComponent as USDLogo } from '../../images/usd.svg';
import { ReactComponent as EURLogo } from '../../images/eur.svg';

const Header = () => {
  const [dollarsRate, setDollarsRate] = useState(0);
  const [eurosRate, setEurosRate] = useState(0);

  const fetchData = async currency => {
    await fetchExchange(currency)
      .then(res => {
        if (currency === 'USD') setDollarsRate(res.data.rates.UAH.rate);
        if (currency === 'EUR') setEurosRate(res.data.rates.UAH.rate);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData('USD');
    fetchData('EUR');
  }, []);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <ul className={css.currentExchange}>
          <li>
            <USDLogo className={css.currencyLogo} />
            <p>
              USD <span>{dollarsRate}</span>
            </p>
          </li>
          <li>
            <EURLogo className={css.currencyLogo} />
            <p>EUR</p>
            <span>{eurosRate}</span>
          </li>
        </ul>
        <ul className={css.linksList}>
          <li>
            <a href="tel:+380685656461" className={css.link}>
              +38(068) 565-64-61
            </a>
          </li>
          <li>
            <a href="mailto:vmpometun@gmail.com" className={css.link}>
              vmpometun@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
