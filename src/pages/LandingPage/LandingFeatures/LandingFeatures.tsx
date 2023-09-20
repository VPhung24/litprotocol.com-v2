import { HardwareImg, InteropImg, TrustImg } from './assets';
import styles from './landing-features.module.scss';

const LandingFeatures = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.badge}>
          <span>Globally Distributed</span>
        </div>
        <h2 className={styles.title}>
          Decentralized key management,{' '}
          <span className={styles.title__break}>
            powered by applied cryptography
          </span>
        </h2>
        <p className={styles.subtitle}>
          Currently in developer preview, Lit is a network of 30+ nodes
          utilizing cutting-edge cryptography, robust hardware, and peer-to-peer
          networking to securely generate and manage keys.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.feature}>
          <TrustImg className={styles.feature__logo} />
          <div>
            <h3 className={styles.feature__title}>Distributed trust</h3>
            <p className={styles.feature__copy}>
              Harnessing multi-party computation (MPC) and threshold secret
              schemes (TSS), Lit distributes encrypted key shares across the Lit
              network. Neither you nor your users need to store any private key
              material.{' '}
              <span className={styles.feature__highlight}>
                No party ever possesses the entire key.
              </span>
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <HardwareImg className={styles.feature__logo} />
          <div>
            <h3 className={styles.feature__title}>Embedded security</h3>
            <p className={styles.feature__copy}>
              Lit leverages trusted execution environments (TEEs) to ensure that
              node operators never have access to key shares or computations
              processed within the nodes.{' '}
              <span className={styles.feature__highlight}>
                Your keys and data remains private and untouched.
              </span>
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div>
            <InteropImg className={styles.feature__logo} />
            <h3 className={styles.feature__title}>Native interoperability</h3>
            <p className={styles.feature__copy}>
              The keys managed on Lit can read and write data across
              blockchains, storage networks, and state machines&mdash;bridging
              previously disconnected ecosystems.{' '}
              <span className={styles.feature__highlight}>
                Build experiences that span web2 and web3.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
