import { Container } from 'src/components'

import { BlogPreview } from 'src/pages/Blog/components'

import styles from './blog-post-read-more.module.scss'

const BlogPostReadMore = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.title}>Read More</div>

      <div className={styles.inner}>
        {Array.from({ length: 2 }).map((_, i) => (
          <BlogPreview key={i} />
        ))}
      </div>
    </Container>
  )
}

export default BlogPostReadMore