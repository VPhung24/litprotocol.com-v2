import { DISCORD_LINK, DOCS_LINK } from '@/utils/constants';
import styles from './landing-cta.module.scss';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import DocsImg from './assets/docs.png';
import CommunityImg from './assets/community.png';
import Dots from './assets/dots.svg';
import Image from 'next/image';

const LandingCta = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            Build a more <span className={styles.emphasis}>open, secure</span>{' '}
            internet
          </h3>
          <p className={styles.subtitle}>
            Lit&apos;s decentralized key network enables non-custodial
            progressive self custody, powering the next generation of identity
            management on the open web.
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
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles['card--dark']}`}>
            <Image
              src={DocsImg}
              alt="Claim wallet component on a grid background"
              className={styles.card__img}
            />
            <div className={styles.card__content}>
              <h4 className={styles.card__title}>Dive into our resources</h4>
              <p className={styles.card__description}>
                Go from 0 to 1 with our developer docs and ready-to-use
                examples.
              </p>
              <a
                href={DOCS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card__link}
              >
                Start building{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={styles['card__link__icon']}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className={`${styles.card} ${styles['card--light']}`}>
            <Image
              src={CommunityImg}
              alt="Avatars on a globe background"
              className={styles.card__img}
            />
            <div className={styles.card__content}>
              <h4 className={styles.card__title}>Join our community</h4>
              <p className={styles.card__description}>
                Connect with other builders, and help shape the future of Lit.
              </p>
              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card__link}
              >
                Join our Discord{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={styles['card__link__icon']}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            className={`${styles.card} ${styles['card--full']} ${styles['card--primary']}`}
            style={{
              backgroundImage: `url(${Dots.src})`,
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className={styles.card__content}>
              <h4 className={styles.card__title}>
                Sign up for our newsletter for updates on all things Lit
              </h4>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCta;
