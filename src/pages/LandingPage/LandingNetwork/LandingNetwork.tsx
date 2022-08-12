import { Container } from 'src/components'

import NetworkCode from './NetworkCode'
import NetworkSlider from './NetworkSlider'

import styles from './landing-network.module.scss'

const LandingNetwork = () => {
  return (
    <div className={styles.wrapper}>
        <Container className={styles.inner}>
            <div className={styles.content}>
                <h2 className={styles.title}>The Lit Network</h2>

                <div className={styles.subtitle}>
                    Each Lit node has a protected key share for signing and decrypting. They use this key share to produce a signing or decryption share, based on your rules and automations.<br/><br/>
                    In order to produce a full signature or decryption key, more than a threshold (⅔ of nodes) of the signing or decryption shares must be combined. 
                </div>
            </div>

            <NetworkCode />
        </Container> 

        <NetworkSlider />
    </div>
  )
}

export default LandingNetwork