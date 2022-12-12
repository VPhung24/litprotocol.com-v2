import { Link } from 'react-router-dom'
import cx from 'classnames'

import { Portal, Button } from 'src/components'

import { PATHS } from 'src/config'

import styles from './basic-menu.module.scss'

const MENU_ITEMS = [
  {
    // name: PATHS.BLOG,
    label: 'Blog',
    href: 'https://spark.litprotocol.com '
  },
  {
    name: PATHS.COMMUNITY,
    label: 'Community',
  },
]

interface BasicMenuProps {
  color?: string
}

const BasicMenu = (props: BasicMenuProps) => {
  const { color } = props

  return (
    <Portal.Wrapper id="basicMenu" width={992}>
      {MENU_ITEMS.map((item, i) => (
        <div className={styles.menuItem} key={i}>
          {item.href ? (
            <a className={cx(color && styles[color])} href={item.href}>{item.label}</a>
          ) : (
            <Link className={cx(color && styles[color])} to={item.name || '#'}>
              {item.label}
            </Link>
          )}
        </div>
      ))}
      <Button
        className={cx(styles.button, color && styles[color])}
        href="https://developer.litprotocol.com/"
      >
        Documentation
      </Button>
    </Portal.Wrapper>
  )
}

export default BasicMenu
