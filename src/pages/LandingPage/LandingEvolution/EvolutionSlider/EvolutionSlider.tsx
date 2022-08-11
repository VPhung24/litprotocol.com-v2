import { useState } from 'react'
import cx from 'classnames'

import { Container } from 'src/components'

import EvolutionCard from './EvolutionCard'

import styles from './evolution-slider.module.scss'

import webToday from './assets/webToday.png'
import decentralizedWeb from './assets/decentralizedWeb.png'
import decentralizedWebWithMoreKeyTypes from './assets/decentralizedWebWithMoreKeyTypes.png'

const CARDS = [
    {
      title: 'The Web Today',
      subtitle: 'Your data is controlled by corporations',
      image: webToday
    },
    {
      title: 'The Decentralized Web',
      subtitle: 'Your data and tokens are controlled by your key',
      image: decentralizedWeb
    },
    {
      title: 'The Decentralized Web with More Key Types',
      subtitle: 'Custodians are Centralized Key Controllers, Lit is Not',
      image: decentralizedWebWithMoreKeyTypes
    }
]  

const EvolutionSlider = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState<number>(0)

  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.inner} style={{ left: currentCardIndex === 0 ? undefined : `-${(820 + 40) * currentCardIndex - 119}px`}}>
                {CARDS.map((card, i) => (
                    <EvolutionCard key={i} {...card} />
                ))}
            </div>
        </div>

        <Container className={styles.buttons}>
            {CARDS.map((card, i) => (
                <span 
                    key={i} 
                    className={cx(currentCardIndex === i && styles.active)}
                    onClick={() => setCurrentCardIndex(i)}
                />
            ))}
        </Container>
    </>
  )
}

export default EvolutionSlider