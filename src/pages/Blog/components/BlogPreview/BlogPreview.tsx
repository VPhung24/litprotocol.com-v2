import { Link, generatePath } from 'react-router-dom'
import cx from 'classnames'

import { PATHS } from 'src/config'

import styles from './blog-preview.module.scss'

import mockImg from './assets/mock.png'

interface BlogPreviewProps {
    className?: string
}

const BlogPreview = (props: BlogPreviewProps) => {
  const { className } = props

  const postUrl = generatePath( PATHS.BLOG_POST, { slug: 'test-post' })

  return (
    <div className={cx(styles.wrapper, className)}>
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
                <Link to={postUrl}>Read More</Link>
            </div>
        </div>

        <img className={styles.image} src={mockImg} alt="mock" />
    </div>
  )
}

export default BlogPreview