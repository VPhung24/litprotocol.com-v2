import { Container } from 'src/components'

import { BlogPreview } from 'src/pages/Blog/components'

import styles from './blog-post-read-more.module.scss'

const BlogPostReadMore = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.title}>Read More</div>

        <div className={styles.inner}>
          {Array.from({ length: 2 }).map((_, i) => (
            <BlogPreview className={styles.preview} key={i} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default BlogPostReadMore