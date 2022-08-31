import { Container, Button } from 'src/components'

import BlogPreview from './BlogPreview'

import styles from './blog-previews.module.scss'

const BlogPreviews = () => {
  return (
    <Container className={styles.wrapper}>
        {Array.from({ length: 6 }).map((_, i) => (
            <BlogPreview key={i} />
        ))}

        <Button className={styles.moreButton}>Load More</Button>
    </Container>
  )
}

export default BlogPreviews