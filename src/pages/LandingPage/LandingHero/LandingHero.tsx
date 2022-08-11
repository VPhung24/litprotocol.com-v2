import { Container, Button } from 'src/components'

import styles from './landing-hero.module.scss'

const LandingHero = () => {
  return (
    <Container className={styles.wrapper}>
        <div className={styles.inner}>
            <h1 className={styles.title}>
                Automate &<br/> 
                Free the Web
            </h1>

            <div className={styles.bottom}>
                <div className={styles.description}>
                    Lit is Decentralized Cryptography for<br/>
                    Access Control, Compute, and Encryption
                </div>

                <Button color="white">Start Building</Button>
            </div>
        </div>
    </Container>
  )
}

export default LandingHero