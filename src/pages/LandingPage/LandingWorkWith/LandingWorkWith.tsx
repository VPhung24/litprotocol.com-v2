import { Container } from 'src/components'

import styles from './landing-work-with.module.scss'

import * as logos from './logos'

const LandingWorkWith = () => {
  return (
    <div className={styles.wrapper}>
      <Container innerClassName={styles.inner}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Native Interoperability</h2>
        </div>

        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            Lit is a blockchain-agnostic middleware network that can be used to read and write data between blockchains,
            state machines, and off-chain platforms with conditional decryption and programmatic signing.
          </div>
        </div>
      </Container>

      <div className={styles.logos}>
        {Object.values(logos).map((Logo, i) => (
          <Logo className={styles.logo} key={i}/>
        ))}
      </div>
    </div>
  )
}

export default LandingWorkWith