import { Container, VideoBackground } from 'src/components'

import styles from './landing-join.module.scss'
import { PATHS } from "../../../config";
import { Link } from "react-router-dom";

const LINKS = [
  {
    label: 'Discord',
    href: 'https://litgateway.com/discord',
    name: 'discord'
  },
  {
    label: 'Community Calendar',
    href: 'https://litgateway.com/calendar'
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/litprotocol',
  },
  {
    label: 'Newsletter',
    href: 'https://spark.litprotocol.com/'
  },
]

const LandingJoin = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.pretitle}>Join the community</div>
        <h2 className={styles.title}>Building is Better Together</h2>

        <div className={styles.links}>
          {LINKS.map((link, i) => (
            <div key={i}>
              {link.href ? (
              <a key={i} className={styles.link} href={link.href}>
                {link.label}
              </a>
              ) : (
                <Link to={link.name || '#'}>{link.label}</Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.image}>
        <VideoBackground name="join" />
      </div>
    </Container>
  )
}

export default LandingJoin
