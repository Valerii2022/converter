import css from './Footer.module.css';
import { ReactComponent as GithubLogo } from '../../images/github.svg';
import { ReactComponent as TelegramLogo } from '../../images/telegram.svg';
import { ReactComponent as LinkedinLogo } from '../../images/linkedin.svg';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <ul className={css.navigation}>
        <li>
          <a
            href="https://github.com/Valerii2022"
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            <GithubLogo className={css.icon} width={20} />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/ValeriiPometun"
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            <TelegramLogo className={css.icon} width={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/valerii-pometun-a63231268/"
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            <LinkedinLogo className={css.icon} width={20} />
          </a>
        </li>
      </ul>
      <p className={css.text}> Valerii Pometun 2023</p>
    </footer>
  );
};

export default Footer;
