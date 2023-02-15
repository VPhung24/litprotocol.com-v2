import { Container, VideoBackground, Button } from 'src/components'

import styles from './landing-hero.module.scss'

const LandingHero = () => {
  return (
    <Container className={styles.wrapper}>
      <VideoBackground name="hero" />

      <div className={styles.inner}>
        <h1 className={styles.title}>
          Automate & <br />
          Free the Web
        </h1>

        <div className={styles.bottom}>
          <div className={styles.description}>
            Lit is decentralized key management for encryption, <br />
            compute, and distributed custody.
          </div>

          <Button color="white" href="https://developer.litprotocol.com/">
            Start Building
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default LandingHero
