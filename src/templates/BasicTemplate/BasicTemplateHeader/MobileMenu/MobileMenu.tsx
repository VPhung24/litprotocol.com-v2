import cx from 'classnames'

import { Container, Portal } from 'src/components'

import styles from './mobile-menu.module.scss'

interface MobileMenuProps {
  show: boolean
}

const MobileMenu = (props: MobileMenuProps) => {
  const { show } = props

  return (
    <Container className={cx(styles.wrapper, show && styles.show)}>
      <Portal.Target
        id="basicMenu"
        media="mobile"
      />
    </Container>
  )
}

export default MobileMenu