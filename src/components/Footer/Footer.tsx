import {
  CALENDAR_LINK,
  CAREERS_LINK,
  CONTACT_FORM,
  DISCORD_LINK,
  DOCS_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  MANIFESTO_LINK,
  SPARK_LINK,
  TWITTER_LINK,
} from 'src/constants';
import styles from './footer.module.scss';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__divider}></div>
      <nav className={styles.footer__nav}>
        <div className={styles.footer__company}>
          <a href="/" className={styles.footer__title}>
            Lit Protocol
          </a>
          {/* <p>Decentralized key management network</p> */}
          {/* <SubscribeForm /> */}
        </div>
        <div className={styles.footer__grid}>
          <div className={styles.footer__grid__item}>
            <h6 className={styles.footer__category}>Resources</h6>
            <a
              href={DOCS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              Docs
            </a>
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              GitHub
            </a>
            <a
              href={SPARK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              Blog
            </a>
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              Calendar
            </a>
            <a
              href={CONTACT_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              Contact
            </a>
          </div>
          <div className={styles.footer__grid__item}>
            <h6 className={styles.footer__category}>Social</h6>
            <a
              href={TWITTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              Twitter
            </a>
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              Discord
            </a>
            <a
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              LinkedIn
            </a>
          </div>
          <div className={styles.footer__grid__item}>
            <h6 className={styles.footer__category}>Company</h6>
            <a
              href={MANIFESTO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              Our Mission
            </a>
            <a
              href={CAREERS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              Careers
            </a>
          </div>
          <div className={styles.footer__grid__item}>
            <h6 className={styles.footer__category}>Legal</h6>
            <a href="/legal/privacy-policy" className={styles.footer__link}>
              Privacy Policy
            </a>
            <a href="/legal/terms-of-service" className={styles.footer__link}>
              Terms of Service
            </a>
            <a href="/legal/developer-license" className={styles.footer__link}>
              Developer License
            </a>
            <a
              href="/legal/security-commitments"
              className={styles.footer__link}
            >
              Security Commitments
            </a>
          </div>
        </div>
      </nav>
      <div className={styles.footer__copyright}>
        <p>Lit Association. Copyright © {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
};

export default Footer;
