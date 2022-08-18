import { useState } from 'react'

import { Container, Icons } from 'src/components'

import HeaderMenu from './HeaderMenu'
import MobileMenu from './MobileMenu'
import BasicMenu from './BasicMenu'

import styles from './basic-template-header.module.scss'

import { ReactComponent as Logo } from './assets/logo.svg'

const BasicTemplateHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  const MobileMenuIcon = Icons[showMobileMenu ? 'Close' : 'Burger']

  return (
    <>
      <Container className={styles.wrapper} innerClassName={styles.inner}>
        <div className={styles.logo}>
          <a href="/"><Logo /></a>
        </div>

        <HeaderMenu />

        <div className={styles.burger} onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <MobileMenuIcon />
        </div>
      </Container>

      <MobileMenu show={showMobileMenu} />

      <BasicMenu />
    </>
  )
}

export default BasicTemplateHeader