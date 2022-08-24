import { Container } from 'src/components'

import ProjectItem from './ProjectItem'

import styles from './community-projects.module.scss'

import OrbisClubImg from './assets/orbis-club.png'
import HeadlineImg from './assets/headline.png'
import GathertownImg from './assets/gathertown.png'

const PROJECTS = [
  {
    name: 'Orbis Club',
    description: 'A fully decentralized social layer for the internet that any developers can use to build their own social apps or features',
    image: OrbisClubImg,
  },
  {
    name: 'Headline',
    description: 'A decentralized publishing platform',
    image: HeadlineImg,
  },
  {
    name: 'Gathertown',
    description: 'A way to meet online',
    image: GathertownImg,
  }
]

const CommunityProjects = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.top}>
          <div className={styles.title}>Here are n projects<br/> using Lit.</div>

          <a href="#">Reach Out To Get Listed</a>
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