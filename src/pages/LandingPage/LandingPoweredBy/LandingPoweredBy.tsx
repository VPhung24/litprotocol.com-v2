import { Container } from 'src/components'

import NetworkSlider from './NetworkSlider/NetworkSlider'

import styles from './landing-powered-by.module.scss'

const LandingPoweredBy = () => {
  return (
    <div className={styles.wrapper}>
        <Container innerClassName={styles.inner}>
            <div className={styles.content}>
                <h2 className={styles.title}>Powered By</h2>

                <div className={styles.subtitle}>
                  Description of the massive power.
                </div>
            </div>

            {/*<NetworkCode />*/}
        </Container>

        <NetworkSlider />
    </div>
  )
}

export default LandingPoweredBy