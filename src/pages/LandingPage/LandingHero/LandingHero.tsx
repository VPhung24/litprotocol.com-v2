import styles from './landing-hero.module.scss';
import { DOCS_LINK } from 'src/constants';

const LandingHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles['hero-img']}></div>
      {/* <img src={NodeImg} alt="nodes" className={styles['hero-img']}></img> */}
      <div className={styles['content-wrapper']}>
        <h1 className={styles.title}>Decentralized Key Management Network</h1>
        <div className={styles['copy-wrapper']}>
          <p className={styles.subtitle}>
            Lit is a distributed key network for secure signing, encryption, and
            compute without centralized keyholders.
          </p>
          <a href={DOCS_LINK} className={styles['cta-btn']}>
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
