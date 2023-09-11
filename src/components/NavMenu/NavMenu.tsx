import * as Dialog from '@radix-ui/react-dialog';
import styles from './navmenu.module.scss';
import { ReactComponent as Logo } from './assets/logo.svg';
import {
  CONTACT_FORM,
  DOCS_LINK,
  GITHUB_LINK,
  SPARK_LINK,
  USE_CASES_LINK,
} from 'src/constants';

const NavMenu = ({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <Dialog.Root open={menuOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.modal}>
          <header className={styles.header}>
            <div className={styles.header__wrapper}>
              <a href="/">
                <Logo className={styles.header__logo} />
              </a>
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
          <nav className={styles.nav}>
            <div className={styles.nav__links}>
              <a
                href={USE_CASES_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.nav__link}
              >
                Use Cases
              </a>
              <a
                href={DOCS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.nav__link}
              >
                Docs
              </a>
              <a
                href={SPARK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.nav__link}
              >
                Blog
              </a>
              <a
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footer__link}
              >
                GitHub
              </a>
            </div>
            <div className={styles.nav__btns}>
              <a
                href={DOCS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.nav__btn} ${styles['nav__btn--primary']}`}
              >
                Get started
              </a>
              <a
                href={CONTACT_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.nav__btn} ${styles['nav__btn--outline']}`}
              >
                Reach out
              </a>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NavMenu;
