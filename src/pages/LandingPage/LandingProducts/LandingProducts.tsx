import EncryptionImg from './assets/encryption.png';
import ServerlessImg from './assets/serverless.png';
import WalletImg from './assets/wallet.png';
import { ProgrammableWallet } from './assets';
import styles from './landing-products.module.scss';

const LandingProducts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.badge}>
          <span>Powerful Tooling</span>
        </div>
        <h2 className={styles.title}>Sign. Encrypt. Compute.</h2>
        <p className={styles.subtitle}>
          Keys managed on Lit are distributed and fault tolerant, so no
          centralized authority can ever withhold access. Use Lit to build
          digital experiences with greater privacy, flexibility, and control.
        </p>
      </div>
      <div className={styles['product-wrapper']}>
        <div className={styles.product}>
          <img
            src={WalletImg}
            alt="Auth providers leading to a wallet"
            className={`${styles.product__img} ${styles['product__img--wallet']}`}
          />
          {/* <ProgrammableWallet /> */}
          <div className={styles.product__description}>
            <div>
              <h3 className={styles.product__title}>
                Streamline user experience with{' '}
                <span className={styles.product__highlight}>
                  programmable, distributed wallets
                </span>
              </h3>
              <p className={styles.product__copy}>
                Empower your users with portable and scalable wallets secured by
                intuitive authentication like social logins and passkeys.
                Deliver seamless onboarding, easy recovery, and user-centric
                security features&#8212;all without worrying about managing
                private keys.
              </p>
            </div>
            <a
              href="https://developer.litprotocol.com/v2/concepts/pkpsAsWallet"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.product__link}
            >
              Build with Lit wallets &#8594;
            </a>
          </div>
        </div>
        <div className={styles.product}>
          <img
            src={EncryptionImg}
            alt="Conditional encryption"
            className={`${styles.product__img} ${styles['product__img--encryption']}`}
          />
          <div className={styles.product__description}>
            <div>
              <h3 className={styles.product__title}>
                Store private data on the open web with{' '}
                <span className={styles.product__highlight}>
                  flexible access control
                </span>
              </h3>
              <p className={styles.product__copy}>
                Define conditional rules to control access to confidential data,
                stored anywhere. Lit will validate your rules and grant
                decryption capabilities, without ever accessing the private
                data.
              </p>
            </div>
            <a
              href="https://developer.litprotocol.com/v2/accessControl/intro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.product__link}
            >
              Integrate access control &#8594;
            </a>
          </div>
        </div>
        <div className={styles.product}>
          <img
            src={ServerlessImg}
            alt="Clouds above code"
            className={`${styles.product__img} ${styles['product__img--serverless']}`}
          />
          <div className={styles.product__description}>
            <div>
              <h3 className={styles.product__title}>
                Supercharge your apps with{' '}
                <span className={styles.product__highlight}>
                  serverless automations
                </span>
              </h3>
              <p className={styles.product__copy}>
                Write serverless function logic in your preferred language to
                drive event-based signing, encryption, and identity management.
                Ship and iterate faster without the burden of scaling key
                infrastructure.
              </p>
            </div>
            <a
              href="https://developer.litprotocol.com/v2/LitActions/intro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.product__link}
            >
              Dive into Lit Actions &#8594;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProducts;
