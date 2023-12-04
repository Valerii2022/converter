import css from './Header.module.css';
import { ReactComponent as Logo } from '../../images/logo.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logoWrapper}>
        <Logo className={css.logo} />
      </div>
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
    </header>
  );
};

export default Header;
