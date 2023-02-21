import { Container, Button } from 'src/components'
import ReadyCard from './ReadyCard'
import styles from './community-ready.module.scss'

const CARDS = [
  {
    title: ' Lit   x   WalletConnect',
    description: 'Read this guide to learn how to connect your Lit-powered MPC wallet to the decentralized Web.',
    link: 'https://spark.litprotocol.com/connecting-lit-pkps-with-dapps/'
  },
  {
    title: 'Lit   x   AA',
    description: 'Learn how Lit’s MPC Protocol and Account Abstraction can be used together.',
    link: 'https://spark.litprotocol.com/account-abstraction-and-mpc/'
  }
]

const CommunityReady = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.top}>
          <div className={styles.title}>Ready to Make It Happen?</div>

          <div className={styles.description}>
            <div>Get started with Lit using these developer guides.<br/>For technical support, reach out to the team in
              Discord.
            </div>
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