import { Container } from 'src/components'

import styles from './landing-work-with.module.scss'

import * as logos from './logos'

const LandingWorkWith = () => {
  return (
    <div className={styles.wrapper}>
        <Container innerClassName={styles.inner}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>Works With</h2>
            </div>

            <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                    Using threshold cryptography, Lit provides a key without a key master that works across blockchains, storage networks, and platforms.
                </div>
            </div>
        </Container>

        <div className={styles.logos}>
            {Object.values(logos).map((Logo, i) => (
                <Logo key={i} />
            ))}
        </div>
    </div>
  )
}

export default LandingWorkWith