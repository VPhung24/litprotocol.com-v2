import { useState } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import { Container, Icons } from 'src/components'

import HeaderMenu from './HeaderMenu'
import MobileMenu from './MobileMenu'
import BasicMenu from './BasicMenu'

import styles from './basic-template-header.module.scss'

import { PATHS } from 'src/config'

import { ReactComponent as Logo } from './assets/logo.svg'

interface BasicTemplateHeaderProps {
  color?: string
}

const BasicTemplateHeader = (props: BasicTemplateHeaderProps) => {
  const { color } = props

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  const MobileMenuIcon = Icons[showMobileMenu ? 'Close' : 'Burger']

  return (
    <>
      <Container className={cx(styles.wrapper, color && styles[color], showMobileMenu && styles.showMobile)} innerClassName={styles.inner}>
        <div className={styles.logo}>
          <Link to={PATHS.LANDING}><Logo /></Link>
        </div>

        <HeaderMenu />

        <div className={styles.burger} onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <MobileMenuIcon />
        </div>
      </Container>

      <MobileMenu show={showMobileMenu} />

      <BasicMenu color={color} />
    </>
  )
}

export default BasicTemplateHeader