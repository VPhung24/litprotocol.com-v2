import { DISCORD_LINK, DOCS_LINK } from 'src/constants';
import { ChevronRightImg, CodeImg, WorldImg } from './assets';
import styles from './landing-cta.module.scss';

const LandingCta = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Build a more open, secure internet</h3>
        <p className={styles.subtitle}>
          Effortlessly sign, encrypt, and compute with Lit.
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
            <CodeImg className={styles.card__img} />
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
            <ChevronRightImg className={styles.card__arrow} />
          </a>
        </div>
        <div className={styles.card}>
          <div className={styles.card__wrapper}>
            <WorldImg className={styles.card__img} />
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
            <ChevronRightImg className={styles.card__arrow} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingCta;
