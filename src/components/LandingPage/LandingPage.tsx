import styles from './landing-page.module.scss';
import LandingProducts from '../LandingProducts/LandingProducts';
import LandingFeatures from '../LandingFeatures/LandingFeatures';
import LandingUseCases from '../LandingUseCases/LandingUseCases';
import LandingComparison from '../LandingComparison/LandingComparison';
import LandingBlog from '../LandingBlog/LandingBlog';
import LandingPartners from '../LandingPartners/LandingPartners';
import LandingCta from '../LandingCta/LandingCta';
import LandingHero from '../LandingHero/LandingHero';

const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <div className={styles.container}>
        {/* Partners */}
        <LandingPartners />
        {/* Products */}
        <section className={styles.section}>
          <div className={`${styles.header} ${styles['header--centered']}`}>
            <h2 className={styles.title}>Sign. Encrypt. Compute.</h2>
            <p className={styles.subtitle}>
              Keys managed on Lit are distributed and fault tolerant, so no
              centralized authority can ever withhold access. Use Lit to build
              digital experiences with greater privacy, flexibility, and
              control.
            </p>
          </div>
          <LandingProducts />
        </section>
        {/* Network */}
        <section className={styles.section}>
          <div className={`${styles.header} ${styles['header--centered']}`}>
            <div className={styles.badge}>
              <span>Globally Distributed</span>
            </div>
            <h2 className={styles.title}>The Lit Network</h2>
            <p className={styles.subtitle}>
              Currently in developer preview, Lit is a network of 30+ nodes
              utilizing cutting-edge cryptography, robust hardware, and
              peer-to-peer networking to securely generate and manage keys.
            </p>
          </div>
          <LandingFeatures />
        </section>
        {/* Comparison */}
        <section className={styles.section}>
          <div className={`${styles.header} ${styles['header--centered']}`}>
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
              complete data privacy.
            </p>
          </div>
          <LandingComparison />
        </section>
        {/* Use Cases */}
        <section className={styles.section}>
          <div className={`${styles.header} ${styles['header--centered']}`}>
            <div className={styles.badge}>
              <span>Limitless Possibilities</span>
            </div>
            <h2 className={styles.title}>Versatile tooling for any use case</h2>
            <p className={styles.subtitle}>
              Lit is designed to seamlessly integrate into your existing stack,
              enabling a diverse range of use cases from DeFi automation to
              private web3 social and &lsquo;wallet as a service&lsquo;
              infrastructure.
            </p>
          </div>
          <LandingUseCases />
        </section>
        {/* Blog */}
        <section className={styles.section}>
          <LandingBlog />
        </section>
        {/* CTA */}
        <section className={styles.section}>
          <LandingCta />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
