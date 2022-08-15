import { Container } from 'src/components'

import styles from './landing-join.module.scss'

const LINKS = [
    {
        label: 'Discord'
    },
    {
        label: 'Community Calendar'
    },
    {
        label: 'Twitter'
    },
    {
        label: 'Newsletter'
    }
]

const LandingJoin = () => {
  return (
    <Container className={styles.wrapper}>
        <div className={styles.inner}>
            <div className={styles.pretitle}>Join the community</div>
            <h2 className={styles.title}>Building is Better Together</h2>

            <div className={styles.links}>
                {LINKS.map((link, i) => (
                    <a key={i} className={styles.link} href="#">{link.label}</a>
                ))}
            </div>
        </div>

        <div className={styles.image}>
            <video autoPlay muted loop>
                <source src="/video/bottom.mp4" type="video/mp4" />
            </video>
        </div>
    </Container>
  )
}

export default LandingJoin