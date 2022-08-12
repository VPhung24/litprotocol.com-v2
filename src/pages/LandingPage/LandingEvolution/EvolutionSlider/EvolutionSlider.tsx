import { Slider } from 'src/components'

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
  return (
    <Slider className={styles.slider} gap={40} color="white">
      {CARDS.map((card, i) => (
        <EvolutionCard key={i} {...card} />
      ))}
    </Slider>
  )
}

export default EvolutionSlider