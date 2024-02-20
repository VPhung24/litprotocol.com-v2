import {
  BANNER_LINK,
} from '@/utils/constants';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p>
        Lit v0 is live! Read the announcement {' '}
        <a href={BANNER_LINK} className={styles.banner__link}>
           here.
        </a>
      </p>
    </div>
  );
};

export default Banner;
