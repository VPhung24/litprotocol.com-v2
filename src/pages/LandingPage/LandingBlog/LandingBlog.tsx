import { SPARK_LINK } from 'src/constants';
import styles from './landing-blog.module.scss';
import IndexImg from './assets/index.png';
import AdoptionImg from './assets/adoption.png';
import BackedByImg from './assets/backedby.png';
import OamoImg from './assets/oamo.png';

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
];

const LandingBlog = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Stay updated</h3>
      <div className={styles.row}>
        {posts.map(post => (
          <div className={styles.post} key={post.slug}>
            <img src={post.image} alt={post.alt} className={styles.post__img} />
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
    </section>
  );
};

export default LandingBlog;
