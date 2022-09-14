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
    link: 'https://orbis.club/post/kjzl6cwe1jw14a9l1l49tv4u2e8qrj1sql5ox84xn5a7jm3yh3yhlw5a9layd1r'
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
  }
]

const CommunityProjects = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.top}>
          <div className={styles.title}>Projects<br/> using Lit.</div>

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