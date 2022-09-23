import { Container, Button } from 'src/components'

import { BlogPreview } from 'src/pages/Blog/components'

import styles from './blog-previews.module.scss'

const BlogPreviews = ({blogData}: any) => {
  return (
    <Container className={styles.wrapper}>
        <div className={styles.inner}>
          {blogData.posts.map((postData: any, i: number) => (
              <BlogPreview key={i} postData={postData}/>
          ))}
        </div>

        {/*<Button className={styles.moreButton}>Load More</Button>*/}
    </Container>
  )
}

export default BlogPreviews