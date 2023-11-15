import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p>
        The Cayenne testnet is live! Sign up for updates{' '}
        <a href="#subscribe" className={styles.banner__link}>
          here.
        </a>
      </p>
    </div>
  );
};

export default Banner;
