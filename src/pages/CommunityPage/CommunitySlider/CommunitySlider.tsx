import { Container, Slider } from 'src/components'

import CommunityCard from './CommunityCard'

import { useWindowSize } from 'src/hooks'

import styles from './community-slider.module.scss'

import { ReactComponent as GamesSvg } from './assets/games.svg'
import { ReactComponent as CloudSvg } from './assets/cloud.svg'
import { ReactComponent as PrivateSvg } from './assets/private.svg'
import { ReactComponent as AutomationSvg } from './assets/automation.svg'
import { ReactComponent as ChainSvg } from './assets/chain.svg'
import { ReactComponent as MusicSvg } from './assets/music.svg'
import { ReactComponent as BuildSvg } from './assets/build.svg'
import { ReactComponent as EveryoneSvg } from './assets/everyone.svg'

const CARDS = [
    {
      title: 'Tokenized, Private, and Interoperable games',
      subtitle: 'Protocols for games with private data, like card games where players have hands.',
      image: GamesSvg
    },
    {
      title: 'Sign in the cloud and take the human out of the loop',
      subtitle: 'Private and Automated Trading',
      image: CloudSvg
    },
    {
      title: 'Bring power to each person with private and portable data',
      subtitle: 'Self sovereign social networking with token gated messaging',
      image: PrivateSvg
    },
    {
      title: 'Add automation and gives users an experience',
      subtitle: 'Private key abstraction for social recovery and authorization without a seed phrase',
      image: AutomationSvg
    },
    {
      title: 'Connect decentralized systems to each other',
      subtitle: 'Cross chain oracles',
      image: ChainSvg
    },
    {
        title: 'Next wave tools for artists, musicians, and creatives',
        subtitle: 'Unlock songs and stems based on trigger actions and NFT ownership',
        image: MusicSvg
    },
    {
        title: 'Build with decentralized + immutable functions',
        subtitle: 'An app that can be ‘acquired’ when someone buys the controlling NFT',
        image: BuildSvg
    },
    {
        title: 'Let everyone become a builder',
        subtitle: 'Tools for creators to build their own fan portal',
        image: EveryoneSvg
    }
] 

const CommunitySlider = () => {
  const windowSize = useWindowSize()

  return (
    <div className={styles.wrapper}>
        <Container>
            <h2 className={styles.title}>Here are some ideas of<br/> what to build with Lit.</h2>
        </Container>

        <Slider 
            className={styles.slider} 
            gap={25}
            color="white"
            disabled={windowSize.width <= Number((styles.breakpoint.replace('px', '')))}
        >
            {CARDS.map((card, i) => (
                <CommunityCard key={i} {...card} />
            ))}
        </Slider>
    </div>
  )
}

export default CommunitySlider