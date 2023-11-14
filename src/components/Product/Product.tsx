import Image, { StaticImageData } from 'next/image';
import styles from './product.module.scss';
import { ComponentType } from 'react';

interface ProductProps {
  badge: string;
  title: string;
  description: string;
  cta: {
    link: string;
    text: string;
  };
  features: {
    title: string;
    description: string;
    link: string;
  }[];
  // CodeBlock: ComponentType;
  imgSrc: StaticImageData;
  altText: string;
  reverse?: boolean;
}

const Product = ({
  badge,
  title,
  description,
  cta,
  features,
  imgSrc,
  altText,
  reverse,
}: ProductProps) => {
  return (
    <div className={styles.container}>
      <div className={styles['product-grid']}>
        <div className={styles.product}>
          <span className={styles.product__badge}>{badge}</span>
          <h3 className={styles.product__title}>{title}</h3>
          <p className={styles.product__description}>{description}</p>
          <a
            href={cta.link}
            className={styles['product__link']}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta.text}{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={styles['product__link__icon']}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div
          className={`${styles['img-wrapper']} ${
            reverse && styles['img-wrapper--reverse']
          }`}
        >
          <Image src={imgSrc} alt={altText} className={styles.product__img} />
        </div>
      </div>
      <div className={styles['feature-grid']}>
        {features.map(feature => (
          <div key={feature.title} className={styles.feature}>
            <div>
              <h4 className={styles.feature__title}>{feature.title}</h4>
              <p className={styles.feature__description}>
                {feature.description}
              </p>
            </div>
            <a
              href={feature.link}
              className={styles.feature__link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={styles['feature__link__icon']}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
