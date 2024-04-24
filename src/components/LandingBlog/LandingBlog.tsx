'use client';

import { useRef, useState } from 'react';
import { SPARK_LINK } from '@/utils/constants';
import styles from './landing-blog.module.scss';
import IndexImg from './assets/index.png';
import AdoptionImg from './assets/adoption.png';
import BackedByImg from './assets/backedby.png';
import OamoImg from './assets/oamo.png';
import SessionKeysImg from './assets/session-keys.png';
import LearningLabImg from './assets/learning-lab.png';
import AIImg from './assets/ai.png';
import IgnitePrizeImg from './assets/ignite-prize.png';
import WalletAbstractionImg from './assets/wallet-abstraction.png';
import Image from 'next/image';

const posts = [
  {
    title: 'Enabling Decentralized Discovery with Index Network and Lit',
    slug: 'decentralized-content-discovery-with-lit-and-index',
    image: IndexImg,
    alt: 'Splattered paint',
  },
  {
    title: 'Mass Adoption of Digital Ownership and Progressive Self Custody',
    slug: 'mass-adoption-of-digital-ownership-and-progressive-self-custody',
    image: AdoptionImg,
    alt: 'Light paint',
  },
  {
    title:
      'BackedBy X Lit: Decentralized Tools to Empower Web3 Content Creators',
    slug: 'backedby-x-lit',
    image: BackedByImg,
    alt: 'Glass wave',
  },
  {
    title: 'Oamo x Lit: Data Brokerage with Built-in Privacy and Permissioning',
    slug: 'oamo-privacy-n-permissioning',
    image: OamoImg,
    alt: 'Colorful nodes',
  },
  {
    title: 'From Session Keys to Session Signatures: Part 1',
    slug: 'session-sig-part-1',
    image: SessionKeysImg,
    alt: 'Glassy ribbons',
  },
  // {
  //   title: 'Learning Lab @ Lit',
  //   slug: 'learning-lab-lit',
  //   image: LearningLabImg,
  //   alt: '3d grid plane and interconnected nodes',
  // },
  {
    title: 'Authenticity in the AI Era',
    slug: 'authenticity-matters',
    image: AIImg,
    alt: 'Yellow light streaks',
  },
  // {
  //   title: 'Introducing The Ignite Prize: A Web3 Hackathon Meta-Bounty',
  //   slug: 'the-ignite-prize',
  //   image: IgnitePrizeImg,
  //   alt: 'Ignite Prize',
  // },
  {
    title: 'Wallet Abstraction: Google OAuth x Lit PKP',
    slug: 'wallet-abstraction-with-google-oauthe',
    image: WalletAbstractionImg,
    alt: 'Colorful glassy flame',
  },
];

const LandingBlog = () => {
  const postsContainer = useRef<HTMLDivElement | null>(null);
  const [transformX, setTransformX] = useState<number>(0);

  const scrollLeft = () => {
    const container = postsContainer.current;
    if (container) {
      const newTransformX = Math.min(transformX + getPostWidth(), 0);
      setTransformX(newTransformX);
      container.style.transform = `translateX(${newTransformX}px)`;
    }
  };

  const scrollRight = () => {
    const container = postsContainer.current;
    if (container) {
      const maxWidth = getPostWidth() * posts.length - container.clientWidth;
      const newTransformX = Math.max(transformX - getPostWidth(), -maxWidth);
      setTransformX(newTransformX);
      container.style.transform = `translateX(${newTransformX}px)`;
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>Stay updated</h3>
          <div className={styles['btn-wrapper']}>
            <button
              onClick={scrollLeft}
              className={`${styles['scroll-btn']} ${styles['scroll-btn--left']}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className={`${styles['scroll-btn']} ${styles['scroll-btn--right']}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.row} ref={postsContainer}>
          {posts.map(post => (
            <div className={styles.post} key={post.slug}>
              <Image
                src={post.image}
                alt={post.alt}
                className={styles.post__img}
              />
              <div className={styles.post__copy}>
                <h4 className={styles.post__title}>{post.title}</h4>
                <a
                  href={`${SPARK_LINK}/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.post__link}
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getPostWidth() {
  const remInPixels = 16;

  const vwWidth = window.innerWidth - 3 * remInPixels;
  const maxWidth = 20 * remInPixels;

  const postWidth = Math.min(vwWidth, maxWidth);

  const gap = window.innerWidth <= 384 ? 1.5 * remInPixels : 0.75 * remInPixels;

  return postWidth + gap;
}

export default LandingBlog;
