import { Slider } from 'src/components'

import NetworkCard from './NetworkCard'

import { useWindowSize } from 'src/hooks'

import styles from './network-slider.module.scss'

import { ReactComponent as KeysSvg } from './assets/keys.svg'
import { ReactComponent as ThresholdSvg } from './assets/threshold.svg'
import { ReactComponent as ProactiveSvg } from './assets/proactive.svg'
import { ReactComponent as DenoSvg } from './assets/deno.svg'
import { ReactComponent as TrustedSvg } from './assets/trusted.svg'

const CARDS = [
  {
    title: 'Distributed Key Generation',
    image: KeysSvg
  },
  {
    title: 'Threshold Secret Sharing',
    image: ThresholdSvg
  },
  {
    title: 'Proactive Secret Sharing',
    image: ProactiveSvg
  },
  {
    title: 'Deno',
    image: DenoSvg
  },
  {
    title: 'Trusted Execution Environment',
    image: TrustedSvg
  }
]

const NetworkSlider = () => {
  const windowSize = useWindowSize()

  return (
    <Slider className={styles.wrapper} gap={windowSize.width > Number(styles.breakpoint.replace('px', '')) ? 25 : 5}>
      {CARDS.map((card, i) => (
        <NetworkCard 
          key={i} 
          index={i}
          {...card} 
        />
      ))}
    </Slider>
  )
}

export default NetworkSlider