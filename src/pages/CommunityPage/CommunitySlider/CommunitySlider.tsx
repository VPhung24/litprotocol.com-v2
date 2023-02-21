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
    subtitle: 'Web3 games that offer dynamically-changing, permissioned content based on the in-game assets one holds or level they have reached',
    image: GamesSvg
  },
  {
    title: 'Sign in the cloud and take the human out of the loop',
    subtitle: 'Condition-based, signing automation for seamless interactions with web3 protocols',
    image: CloudSvg
  },
  {
    title: 'Introduce private data to previously “public-by-default” networks',
    subtitle: 'Empower users with sovereignty over their data and digital interactions using access control and identity-based encryption',
    image: PrivateSvg
  },
  {
    title: 'Seamless onboarding experiences and social recovery',
    subtitle: 'Use Lit’s MPC network to facilitate private key abstraction and seed phrase-less onboarding experiences with support for web2 authentication',
    image: BuildSvg
  },
  {
    title: 'Interoperability for the decentralized Web',
    subtitle: 'Use Lit to read and write data between blockchains and off-chain platforms, without using an oracle or a bridge',
    image: ChainSvg
  },
  {
    title: 'Next wave tools for artists, musicians, and creatives',
    subtitle: 'Incorporate new forms of monetization and access control into your content, using NFT ownership and on-chain data as “keys” that provision access to users',
    image: MusicSvg
  },
  {
    title: 'Build with decentralized + immutable functions',
    subtitle: 'Add token-gating to web2 applications”: use on-chain credentials to gate access to web2 platforms, such as gated Zoom calls, Google documents, and Shopify discounts',
    image: AutomationSvg
  },
  // {
  //   title: 'Let everyone become a builder',
  //   subtitle: 'Tools for creators to build their own fan portal',
  //   image: EveryoneSvg
  // }
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
        gap={windowSize.width <= Number((styles.gapBreakpoint.replace('px', ''))) ? 10 : 25}
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