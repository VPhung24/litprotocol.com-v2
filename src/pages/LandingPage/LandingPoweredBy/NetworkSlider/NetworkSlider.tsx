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
    image: KeysSvg,
    description: 'Lit uses DKG to facilitate the joint computation of private/public key pairs without relying on a trusted 3rd party.'
  },
  {
    title: 'Threshold Secret Sharing',
    image: ThresholdSvg,
    description: 'Lit uses TSS to divide keypairs into multiple shares, where a minimum number of shares (the "threshold") are required to reconstruct the complete key-pair. '
  },
  {
    title: 'Proactive Secret Sharing',
    image: ProactiveSvg,
    description: 'Lit uses PSS to periodically update the key shares stored across the Lit Network to prevent the compromise or leakage or old keys.'
  },
  {
    title: 'Deno',
    image: DenoSvg,
    description: 'A secure and modern JavaScript runtime that provides Lit with the features and tooling for developing and running server-side applications and scripts.'
  },
  {
    title: 'Trusted Execution Environment',
    image: TrustedSvg,
    description: 'All node operations take place inside of a secure enclave, meaning node operators and other external "agents" never have access to the key shares contained within.'
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