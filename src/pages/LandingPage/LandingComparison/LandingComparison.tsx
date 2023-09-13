import LitImg from './assets/lit.png';
import TraditionalImg from './assets/traditional.png';
import styles from './landing-comparison.module.scss';

const traditional = [
  'Centralized control',
  'Single points of failure',
  'Service denials',
  'Data silos',
  'Vendor lock-in',
  'Opaque practices',
  'Privacy concerns',
];

const lit = [
  'Decentralized network',
  'Fault-tolerant design',
  'Scalable',
  'Interoperable',
  'Permissionless',
  'Open-source code',
  'Enhanced privacy',
];

const LandingComparison = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.badge}>
          <span>Our Approach</span>
        </div>
        <h2 className={styles.title}>
          Revolutionizing secret management{' '}
          <span className={styles.title__break}>with decentralization</span>
        </h2>
        <p className={styles.subtitle}>
          Lit combines applied cryptography with secure enclaves in a
          peer-to-peer network to ensure censorship-resistant key access and
          complete data privacy. With Lit, you don't need to trust any authority
          with keys or key shares.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.comparison}>
          <h3 className={styles.comparison__title}>Traditional MPC</h3>
          <img
            src={TraditionalImg}
            alt="Broken key management"
            className={styles.comparison__img}
          />
          <div className={styles.comparison__badges}>
            {traditional.map((item, index) => (
              <span className={styles.comparison__badge} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className={`${styles.comparison} ${styles['comparison--lit']}`}>
          <h3 className={styles.comparison__title}>Lit Protocol</h3>
          <img
            src={LitImg}
            alt="Computer connected to Lit nodes"
            className={styles.comparison__img}
          />
          <div className={styles.comparison__badges}>
            {lit.map((item, index) => (
              <span className={styles.comparison__badge} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingComparison;
