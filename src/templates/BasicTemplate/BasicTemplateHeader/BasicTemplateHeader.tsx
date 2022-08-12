import { Container, Icons } from 'src/components'

import HeaderMenu from './HeaderMenu'

import styles from './basic-template-header.module.scss'

import { ReactComponent as Logo } from './assets/logo.svg'

const BasicTemplateHeader = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.logo}>
        <a href="/"><Logo /></a>
      </div>

      <HeaderMenu />

      <div className={styles.burger}>
        <Icons.Burger />
      </div>
    </Container>
  )
}

export default BasicTemplateHeader