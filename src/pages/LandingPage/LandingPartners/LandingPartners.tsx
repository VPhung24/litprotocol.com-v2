import * as logos from './logos';
import styles from './landing-partners.module.scss';

const LandingPartners = () => {
  return (
    <section className={styles.container}>
      <h6 className={styles.title}>Partnered with world-class builders</h6>
      <div className={styles.marquee}>
        <div className={styles.marquee__group}>
          {Object.values(logos).map((Logo, i) => (
            <Logo className={styles.logo} key={i} />
          ))}
        </div>
        <div className={styles.marquee__group}>
          {Object.values(logos).map((Logo, i) => (
            <Logo className={styles.logo} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPartners;
