import { Container, VideoBackground } from 'src/components'

import styles from './community-quote.module.scss'

const CommunityQuote = () => {
  return (
    <div className={styles.wrapper}>
        <VideoBackground name="quote" />

        <Container className={styles.inner}>
          <div className={styles.quote}>“Lit is building incredible new primitives for decentralized access control, putting privacy first, allowing for targeted, personalized engagement that is private to you & your users”</div>

          <div className={styles.source}>—Dialect</div>
        </Container>
    </div>
  )
}

export default CommunityQuote