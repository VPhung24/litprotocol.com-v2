import styles from './landing-hero.module.scss';
import NodeImg from './assets/nodes-2.png';

const LandingHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles['hero-img']}></div>
      {/* <img src={NodeImg} alt="nodes" className={styles['hero-img']}></img> */}
      <div className={styles['content-wrapper']}>
        <h1 className={styles.title}>Secure keys and data with ease</h1>

        <div className={styles['copy-wrapper']}>
          <p className={styles.subtitle}>
            Lit is a distributed key network for secure signing, encryption, and
            compute without centralized keyholders.
          </p>
          <a href="/" className={styles['cta-btn']}>
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
