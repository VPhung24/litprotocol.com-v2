import { Container, Button } from 'src/components'

import { BlogPreview } from 'src/pages/Blog/components'

import styles from './blog-previews.module.scss'

const BlogPreviews = () => {
  return (
    <Container className={styles.wrapper}>
        <div className={styles.inner}>
          {Array.from({ length: 6 }).map((_, i) => (
              <BlogPreview key={i} />
          ))}
        </div>

        <Button className={styles.moreButton}>Load More</Button>
    </Container>
  )
}

export default BlogPreviews