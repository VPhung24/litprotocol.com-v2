import styles from './blog-preview.module.scss'

import mockImg from './assets/mock.png'

const BlogPreview = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.inner}>
            <div className={styles.time}>
                03.29.22
                <span>4M read</span>
            </div>

            <div className={styles.title}>
                What is Decentralized Access Control?
            </div>

            <div className={styles.description}>
                Read this guide on how to encrypt data using Lit Protocol, upload it to Arwea...
                <a href="#">Read More</a>
            </div>
        </div>

        <img className={styles.image} src={mockImg} alt="mock" />
    </div>
  )
}

export default BlogPreview