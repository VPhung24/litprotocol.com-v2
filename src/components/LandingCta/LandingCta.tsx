import { DISCORD_LINK, DOCS_LINK } from '@/utils/constants';
import styles from './landing-cta.module.scss';

const LandingCta = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>Build a more open, secure internet</h3>
        <p className={styles.subtitle}>
          Lit&apos;s decentralized key network makes true non-custodial
          ownership and self-sovereign possible.
        </p>
        <a
          href={DOCS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['cta-btn']}
        >
          Get started
        </a>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.card__wrapper}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.card__img}
            >
              <path
                d="M18.8 33.2L9.6 24L18.8 14.8L16 12L4 24L16 36L18.8 33.2ZM29.2 33.2L38.4 24L29.2 14.8L32 12L44 24L32 36L29.2 33.2Z"
                fill="#FF844F"
              />
            </svg>
            <div>
              <h4 className={styles.card__title}>Dive into our resources</h4>
              <p className={styles.card__copy}>
                Go from 0 to 1 with our developer docs and ready-to-use
                examples.
              </p>
            </div>
          </div>
          <a
            href={DOCS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card__link}
          >
            <svg
              width="15"
              height="24"
              viewBox="0 0 15 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.card__arrow}
            >
              <path d="M2.99969 0L0.179688 2.82L9.33969 12L0.179688 21.18L2.99969 24L14.9997 12L2.99969 0Z" />
            </svg>
          </a>
        </div>
        <div className={styles.card}>
          <div className={styles.card__wrapper}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.card__img}
            >
              <circle cx="24" cy="24" r="19.5" stroke="#FF844F" />
              <path
                d="M28.7786 43.1054C18.3924 43.1054 9.97266 34.5521 9.97266 24.001C9.97266 13.4498 18.3924 4.89648 28.7786 4.89648"
                stroke="#FF844F"
              />
              <path
                d="M19.2214 43.1054C29.6076 43.1054 38.0273 34.5521 38.0273 24.001C38.0273 13.4498 29.6076 4.89648 19.2214 4.89648"
                stroke="#FF844F"
              />
              <path
                d="M43.6999 23.9985C43.6999 21.1958 34.8792 18.9238 23.9984 18.9238C13.1175 18.9238 4.29687 21.1958 4.29687 23.9985"
                stroke="#FF844F"
              />
              <path
                d="M43.6999 24.0015C43.6999 26.8042 34.8792 29.0762 23.9984 29.0762C13.1175 29.0762 4.29687 26.8042 4.29687 24.0015"
                stroke="#FF844F"
              />
              <line
                x1="24.2031"
                y1="5.78906"
                x2="24.2031"
                y2="42.5055"
                stroke="#FF844F"
              />
            </svg>
            <div>
              <h4 className={styles.card__title}>Join our community</h4>
              <p className={styles.card__copy}>
                Connect with other builders, and help shape the future of Lit.
              </p>
            </div>
          </div>
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card__link}
          >
            <svg
              width="15"
              height="24"
              viewBox="0 0 15 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.card__arrow}
            >
              <path d="M2.99969 0L0.179688 2.82L9.33969 12L0.179688 21.18L2.99969 24L14.9997 12L2.99969 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingCta;
