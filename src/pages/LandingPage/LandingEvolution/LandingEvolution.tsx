import { Container, Button } from 'src/components'

import EvolutionSlider from './EvolutionSlider'

import styles from './landing-evolution.module.scss'

const LandingEvolution = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Evolution of the Web</h2>

        <div className={styles.subtitle}>
          It’s time to build the user owned internet.
        </div>
      </Container>

      <EvolutionSlider />

      <Container>
        <Button
          className={styles.button}
          color="white"
          href="https://developer.litprotocol.com/"
        >
          Start Building
        </Button>
      </Container>
    </div>
  )
}

export default LandingEvolution
