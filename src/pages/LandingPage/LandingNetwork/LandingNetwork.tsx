import { Container } from 'src/components'

import NetworkCode from './NetworkCode'
// import NetworkSlider from '../LandingPoweredBy/NetworkSlider'
import accessControl from './assets/AccessControl.png'
import cloudSigning from './assets/CloudSigning.png'

import styles from './landing-network.module.scss'

const LandingNetwork = () => {
  return (
    <div className={styles.wrapper}>
        <Container innerClassName={styles.inner}>
            <div className={styles.content}>
                <h2 className={styles.title}>The Lit Network</h2>

                <div className={styles.subtitle}>
                  Lit is composed of a decentralized network of nodes, each playing a role in key generation, consensus, and the execution of network actions.
                </div>
            </div>

            {/*<NetworkCode />*/}
        </Container>
        <div className={styles.readWriteImages}>
          <img src={accessControl} alt="Access Control" className={styles.readWriteImage} />
          <img src={cloudSigning} alt="Cloud Signing" className={styles.readWriteImage} />
        </div>

        {/*<NetworkSlider />*/}
    </div>
  )
}

export default LandingNetwork