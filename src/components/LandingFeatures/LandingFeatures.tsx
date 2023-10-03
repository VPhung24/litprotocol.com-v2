import styles from './landing-features.module.scss';
import { ComponentType } from 'react';
import Enclave from './features/Enclave';
import Interoperability from './features/Interoperability';
import Threshold from './features/Threshold';

const features = [
  {
    title: 'Distributed trust',
    description:
      'Harnessing multi-party computation (MPC) and threshold secret schemes (TSS), Lit distributes encrypted key shares across the Lit network. Neither you nor your users need to store any private key material.',
    highlight: 'No party ever possesses the entire key.',
    Icon: Enclave,
  },
  {
    title: 'Embedded security',
    description:
      'Lit leverages trusted execution environments (TEEs) to ensure that node operators never have access to key shares or computations processed within the nodes.',
    highlight: 'Your keys and data remains private and untouched.',
    Icon: Threshold,
  },
  {
    title: 'Native interoperability',
    description:
      'The keys managed on Lit can read and write data across blockchains, storage networks, and state machines—bridging previously disconnected ecosystems.',
    highlight: 'Build experiences that span web2 and web3.',
    Icon: Interoperability,
  },
];

const LandingFeatures = () => {
  return (
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
      <div>
        <Icon />
        <h3 className={styles.feature__title}>{title}</h3>
        <p className={styles.feature__copy}>
          {description}{' '}
          <span className={styles.feature__highlight}>{highlight}</span>
        </p>
      </div>
    </div>
  );
};

export default LandingFeatures;
