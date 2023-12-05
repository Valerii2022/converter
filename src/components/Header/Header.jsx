import css from './Header.module.css';
import { ReactComponent as USDLogo } from '../../images/usd.svg';
import { ReactComponent as EURLogo } from '../../images/eur.svg';

const Header = prop => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <ul className={css.currentExchange}>
          <li>
            <USDLogo className={css.currencyLogo} />
            <p>
              USD{' '}
              <span>
                {prop.rates ? (1 / prop.rates.USD.rate).toFixed(4) : 0}
              </span>
            </p>
          </li>
          <li>
            <EURLogo className={css.currencyLogo} />
            <p>EUR</p>
            <span>
              {prop.rates ? (1 / prop.rates.EUR.rate || 0).toFixed(4) : 0}
            </span>
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
