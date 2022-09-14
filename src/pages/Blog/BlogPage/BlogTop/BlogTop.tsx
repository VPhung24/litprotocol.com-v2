import { Container, Button } from 'src/components'

import styles from './blog-top.module.scss'

const FILTERS = [
    { label: 'All Posts' },
    { label: 'Announcements' },
    { label: 'Community' },
    { label: 'Technology' },
    { label: 'Featured' },
]

const BlogTop = () => {
  return (
    <Container className={styles.wrapper}>
        <h1 className={styles.title}>Lit Blog</h1>

        {/*<div className={styles.filters}>*/}
        {/*    {FILTERS.map((filter, i) => (*/}
        {/*        <Button key={i}>{filter.label}</Button>*/}
        {/*    ))}*/}
        {/*</div>*/}
    </Container>
  )
}

export default BlogTop