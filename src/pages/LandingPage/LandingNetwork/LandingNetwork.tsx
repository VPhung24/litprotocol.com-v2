import { Container } from 'src/components'

import litFlowChart from './assets/litChartSmall.png'
import litFlowChartSmall from './assets/litChart.png'

import styles from './landing-network.module.scss'

const LandingNetwork = () => {
  return (
    <div className={styles.wrapper}>
      <Container innerClassName={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>The Lit Network</h2>

          <div className={styles.subtitle}>
            Lit is composed of a decentralized network of nodes, each playing a role in key generation, consensus, and
            the execution of network actions.
          </div>
        </div>

      </Container>
      <div className={styles.readWriteImages}>
        <img src={litFlowChart} alt="Cloud Signing" className={styles.readWriteImage}/>
        <img src={litFlowChartSmall} alt="Cloud Signing" className={styles.readWriteImageMobile}/>
      </div>
    </div>
  )
}

export default LandingNetwork
