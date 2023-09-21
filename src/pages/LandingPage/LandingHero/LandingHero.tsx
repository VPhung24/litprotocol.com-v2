import { useEffect, useRef } from 'react';
import { KeyImg } from './assets';
import styles from './landing-hero.module.scss';
import { CONTACT_FORM, DOCS_LINK } from 'src/constants';

const coords = [
  { x: '418', y: '111', count: 2 },
  {
    x: '390',
    y: '97',
    count: 4,
  },
  {
    x: '376',
    y: '97',
    count: 6,
  },
  {
    x: '348',
    y: '83',
    count: 8,
  },
  {
    x: '334',
    y: '83',
    count: 8,
  },
  {
    x: '334',
    y: '83',
    count: 10,
  },
  {
    x: '320',
    y: '83',
    count: 11,
  },
  {
    x: '306',
    y: '83',
    count: 11,
  },
  {
    x: '292',
    y: '83',
    count: 12,
  },
  {
    x: '292',
    y: '97',
    count: 12,
  },
  {
    x: '278',
    y: '97',
    count: 12,
  },
  {
    x: '278',
    y: '111',
    count: 12,
  },
  {
    x: '264',
    y: '111',
    count: 12,
  },
  {
    x: '264',
    y: '125',
    count: 12,
  },
  {
    x: '250',
    y: '125',
    count: 12,
  },
  {
    x: '250',
    y: '139',
    count: 12,
  },
  {
    x: '236',
    y: '139',
    count: 12,
  },
  {
    x: '236',
    y: '153',
    count: 12,
  },
  {
    x: '222',
    y: '153',
    count: 12,
  },
  {
    x: '222',
    y: '167',
    count: 12,
  },
  {
    x: '222',
    y: '181',
    count: 11,
  },
  {
    x: '222',
    y: '195',
    count: 10,
  },
  {
    x: '222',
    y: '209',
    count: 8,
  },
  {
    x: '236',
    y: '223',
    count: 7,
  },
  {
    x: '236',
    y: '237',
    count: 6,
  },
  {
    x: '236',
    y: '251',
    count: 5,
  },
  {
    x: '236',
    y: '265',
    count: 3,
  },
  {
    x: '236',
    y: '279',
    count: 2,
  },
  {
    x: '236',
    y: '293',
    count: 2,
  },
  {
    x: '222',
    y: '293',
    count: 2,
  },
  {
    x: '222',
    y: '307',
    count: 2,
  },
  {
    x: '222',
    y: '307',
    count: 2,
  },
  {
    x: '208',
    y: '307',
    count: 2,
  },
  {
    x: '208',
    y: '321',
    count: 2,
  },
  {
    x: '194',
    y: '321',
    count: 2,
  },
  {
    x: '194',
    y: '335',
    count: 2,
  },
  {
    x: '194',
    y: '336',
    count: 2,
  },
  {
    x: '180',
    y: '335',
    count: 2,
  },
  {
    x: '180',
    y: '349',
    count: 2,
  },
  {
    x: '166',
    y: '349',
    count: 2,
  },
  {
    x: '166',
    y: '363',
    count: 4,
  },
  {
    x: '152',
    y: '363',
    count: 5,
  },
  {
    x: '152',
    y: '377',
    count: 5,
  },
  {
    x: '138',
    y: '377',
    count: 5,
  },
  {
    x: '138',
    y: '391',
    count: 4,
  },
  {
    x: '124',
    y: '391',
    count: 2,
  },
  {
    x: '124',
    y: '405',
    count: 5,
  },
  {
    x: '110',
    y: '405',
    count: 6,
  },
  {
    x: '110',
    y: '419',
    count: 6,
  },
  {
    x: '96',
    y: '419',
    count: 6,
  },
  {
    x: '96',
    y: '433',
    count: 2,
  },
  {
    x: '82',
    y: '433',
    count: 2,
  },
  {
    x: '82',
    y: '447',
    count: 2,
  },
  {
    x: '68',
    y: '447',
    count: 2,
  },
  {
    x: '68',
    y: '461',
    count: 1,
  },
];

const LandingHero = () => {
  const svgContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fadeInKey = () => {
      if (svgContainerRef.current) {
        coords.forEach((coord, index) => {
          const order = index + 1;
          for (let i = 0; i < coord.count; i++) {
            let dot: any = document.querySelector(
              `rect[data-shape="key"][x="${parseInt(coord.x) + 14 * i}"][y="${
                parseInt(coord.y) + 14 * i
              }"]`
            );
            if (dot) {
              const randomDuration = Math.floor(Math.random() * (20 - 2) + 2);
              const randomDelay = Math.floor(Math.random() * (60 - 2) + 2);

              dot.style.setProperty(
                '--animation-duration',
                `${randomDuration}s`
              );
              dot.style.setProperty('--animation-delay', `${randomDelay}s`);

              dot.style.setProperty('--animation-order', order.toString());
              dot.setAttribute('data-reveal', 'true');
            }
          }
        });
      }
    };

    const fadeInKeyDelay = setTimeout(fadeInKey, 300);

    return () => clearTimeout(fadeInKeyDelay);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['content-wrapper']}>
          <h1 className={styles.title}>Decentralized Key Management Network</h1>
          <div>
            <p className={styles.subtitle}>
              Lit is a distributed key network for signing, encryption, and
              compute. Build secure applications without single points of
              failure.
            </p>
            <div className={styles['btn-wrapper']}>
              <a
                href={DOCS_LINK}
                className={`${styles['cta-btn']} ${styles['cta-btn--primary']}`}
              >
                Get started &#8594;
              </a>
              <a
                href={CONTACT_FORM}
                className={`${styles['cta-btn']} ${styles['cta-btn--outline']}`}
              >
                Reach out
              </a>
            </div>
          </div>
        </div>
        <div
          ref={svgContainerRef}
          className={`${styles['hero-img']} ${styles['hero-bg']}`}
        >
          <KeyImg className={`${styles['hero-img']} ${styles['hero-key']}`} />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
