import css from './Header.module.css';
import { ReactComponent as Logo } from '../../images/logo.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo className={css.logo} />
        <ul className={css.currentExchange}>
          <li>
            <p>USD 36.5 / 37.5</p>
          </li>
          <li>
            <p>EUR 40.8 / 41.2</p>
          </li>
        </ul>
        <ul className={css.navigation}>
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
