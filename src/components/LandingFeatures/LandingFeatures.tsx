import {WHITEPAPER_LINK } from '@/utils/constants';
import {AUDIT_LINK } from '@/utils/constants';
import styles from './landing-features.module.scss';
import { ComponentType } from 'react';
import Enclave from './features/Enclave';
import Interoperability from './features/Interoperability';
import Threshold from './features/Threshold';

const features = [
  {
    title: 'Distributed Trust',
    description:
      'Harnessing multi-party computation (MPC) and threshold signature schemes (TSS), Lit distributes encrypted key shares across the Lit network. Neither you nor your users need to store any private key material.',
    highlight: 'Keys never exist in their entirety.',
    Icon: Threshold,
  },
  {
    title: 'Embedded Security',
    description:
      'Lit leverages sealed trusted execution environments (TEEs) to ensure that node operators never have access to key shares or data processed within each node.',
    highlight: 'Your keys and data remain private and untouched.',
    Icon: Enclave,
  },
  {
    title: 'Native Interoperability',
    description:
      'The keys managed on Lit can read and write data across blockchains, storage networks, and state machines—bridging previously disconnected ecosystems.',
    highlight: 'Build experiences that span the entire internet.',
    Icon: Interoperability,
  },
];

const LandingFeatures = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Lit Network</h2>
          <p className={styles.subtitle}>
            Lit is a decentralized key management and compute network that leverages cutting-edge cryptography, sealed confidential hardware, and peer-to-peer networking to securely generate and manage keys and execute private and immutable programs.
          </p>
          <div></div>
          <a
            href={WHITEPAPER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['cta-btn']}
          >
            Learn More
          </a>
          <div></div>
          <a
            href={AUDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['cta-btn']}
          >
            Review Audits
          </a>
        </div>
        <div className={styles.grid}>
          {features.map(feature => (
            <Feature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
              Icon={feature.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  title: string;
  description: string;
  highlight: string;
  Icon: ComponentType;
}

const Feature = ({ title, description, highlight, Icon }: FeatureProps) => {
  return (
    <div className={styles.feature}>
      <Icon />
      <h3 className={styles.feature__title}>{title}</h3>
      <p className={styles.feature__copy}>
        {description}{' '}
        <span className={styles.feature__highlight}>{highlight}</span>
      </p>
    </div>
  );
};

export default LandingFeatures;
