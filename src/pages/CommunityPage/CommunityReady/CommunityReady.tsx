import { Container, Button } from 'src/components'

import ReadyCard from './ReadyCard'

import styles from './community-ready.module.scss'

const CARDS = [
    {
        title: ' Lit   x   Bundlr',
        description: 'Read this guide on how to encrypt data using Lit, upload it to Arweave using Bundlr, fetch the Lit encrypted data, and decrypt!',
        link: 'https://blog.litprotocol.com/?p=lit-x-bundlr-x-arweave-guide'
    },
    {
        title: 'Lit   x   Ceramic',
        description: 'Build a simple web application encrypting and decrypting a string using Lit\'s Ceramic SDK.',
        link: 'https://blog.litprotocol.com/?p=lit-protocol-ceramic-network'
    }
]

const CommunityReady = () => {
  return (
    <div className={styles.wrapper}>
        <Container>
            <div className={styles.top}>
                <div className={styles.title}>Ready to Make<br/> It Happen?</div>

                <div className={styles.description}>
                    <div>Learn where to start and how to build with Lit using these<br/>guides. For questions, ask the community in Discord.</div>
                  <a href={'https://developer.litprotocol.com/'}>
                    <Button className={styles.button}>Start Building</Button>
                  </a>
                </div>
            </div>

            <div className={styles.cards}>
                {CARDS.map((card, i) => (
                    <ReadyCard key={i} {...card} />
                ))}
            </div>
        </Container>
    </div>
  )
}

export default CommunityReady