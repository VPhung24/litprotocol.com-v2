import { Link, generatePath } from 'react-router-dom'
import cx from 'classnames'

import { PATHS } from 'src/config'

import styles from './blog-preview.module.scss'

import litlogo from './assets/litlogo.png'
import mock from './assets/mock.png'

interface BlogPreviewProps {
  className?: string
  postData?: any
}

const BlogPreview = (props: BlogPreviewProps) => {
  const { className, postData } = props

  const postUrl = generatePath( PATHS.BLOG_POST, { slug: 'test-post' })

  return (
    <div className={cx(styles.wrapper, className)}>
        <div className={styles.inner}>
            <div className={styles.time}>
              {postData.publishedAt}
                <span>{postData.readtime}</span>
            </div>

            <div className={styles.title}>
              {postData.title}
            </div>

            <div className={styles.description}>
              {postData.summary}...
                <a href={`https://blog.litprotocol.com/?p=${postData.slug}`} style={{color: '#777'}}>Read More</a>
            </div>
        </div>

        {/*<img className={styles.image} src={litlogo} alt="litlogo" />*/}
        {/*<img className={styles.image} src={postData.featuredImage} alt="mock" />*/}
      {/*<span className={styles.image}*/}
      {/*      style={{backgroundImage: `url(${postData.featuredImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}></span>*/}

    </div>
  )
}

export default BlogPreview