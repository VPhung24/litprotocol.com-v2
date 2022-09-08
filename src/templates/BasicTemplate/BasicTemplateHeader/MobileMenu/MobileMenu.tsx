import { Link } from 'react-router-dom'
import cx from 'classnames'

import { Container, Icons } from 'src/components'

import { PATHS } from 'src/config'

import styles from './mobile-menu.module.scss'

const MOBILE_MENU_ITEMS = [
  {
      name: PATHS.BLOG,
      label: 'Blog'
  },
  {
      name: PATHS.COMMUNITY,
      label: 'Community'
  },
  {
    label: 'Use Cases',
    href: 'https://litprotocol.notion.site/Lit-Protocol-Use-Cases-a94916becdc0411f848c3095722c7864'
  },
  {
    label: 'Contact',
    href: 'https://airtable.com/shr2NWJbH1Y6Y3kOU'
  }
]

interface MobileMenuProps {
  show: boolean
}

const MobileMenu = (props: MobileMenuProps) => {
  const { show } = props

  return (
    <Container className={cx(styles.wrapper, show && styles.show)}>
      {MOBILE_MENU_ITEMS.map((item, i) => (
        <div className={styles.menuItem} key={i}>
            <Link to={item.name || '#'}>
              {item.label}
              <Icons.Arrow />
            </Link>
        </div>
      ))}
    </Container>
  )
}

export default MobileMenu