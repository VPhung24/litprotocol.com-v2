import { Container } from 'src/components'

import ProjectItem from './ProjectItem'

import styles from './community-projects.module.scss'

import OrbisClubImg from './assets/orbis-club.png'
import HeadlineImg from './assets/headline.png'
import GathertownImg from './assets/gathertown.png'
import CaskImg from './assets/cask.svg'
import VaynerSportsImg from './assets/vaynersports.jpeg'

const PROJECTS = [
  {
    name: 'Orbis Club',
    description: 'A fully decentralized social layer for the internet that any developers can use to build their own social apps or features',
    image: OrbisClubImg,
    link: 'https://orbis.club/'
  },
  {
    name: 'Headline',
    description: 'A decentralized publishing platform',
    image: HeadlineImg,
    link: 'https://viaheadline.xyz/'
  },
  {
    name: 'Gathertown',
    description: 'A way to meet online',
    image: GathertownImg,
    link: 'https://www.gather.town/'
  },
  {
    name: 'Cask',
    description: 'Cask is a decentralized non-custodial protocol for managing automated money flows in web3',
    image: CaskImg,
    link: 'https://www.cask.fi'
  },
  {
    name: 'VaynerSports',
    description: 'Innovative solutions for a high profile collection of the best athletes and brands in the world',
    image: VaynerSportsImg,
    link: 'https://vaynersports.com/'
  }
]

const CommunityProjects = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.top}>
          <div className={styles.title}>Projects using Lit</div>

          <a href="https://airtable.com/shr2NWJbH1Y6Y3kOU">Reach Out To Get Listed</a>
        </div>

        <div className={styles.projects}>
          {PROJECTS.map((project, i) => (
            <ProjectItem key={i} {...project} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default CommunityProjects