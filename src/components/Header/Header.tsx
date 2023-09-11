import styles from './header.module.scss';
import { ReactComponent as Logo } from './assets/logo.svg';
import {
  CONTACT_FORM,
  DISCORD_LINK,
  DOCS_LINK,
  SPARK_LINK,
  USE_CASES_LINK,
} from 'src/constants';

const Header = ({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__background}></div>
      <div className={styles.header__wrapper}>
        <a href="/">
          <Logo className={styles.header__logo} />
        </a>
        <nav className={styles.header__nav}>
          <a
            href={USE_CASES_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.header__link}
          >
            Use Cases
          </a>
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.header__link}
          >
            Community
          </a>
          <a
            href={SPARK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.header__link}
          >
            Blog
          </a>
          <a
            href={CONTACT_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.header__link}
          >
            Contact
          </a>
        </nav>
        <div className={styles.header__btns}>
          <a
            href={DOCS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.header__cta}
          >
            Get started
          </a>
          <button onClick={toggleMenu} className={styles['menu-btn']}>
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
