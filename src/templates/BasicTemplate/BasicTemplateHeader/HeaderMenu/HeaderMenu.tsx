import { Portal } from 'src/components'

import styles from './header-menu.module.scss'

const HeaderMenu = () => {
  return (
    <Portal.Target
        className={styles.wrapper}
        id="basicMenu"
        media="desktop"
    />
  )
}

export default HeaderMenu