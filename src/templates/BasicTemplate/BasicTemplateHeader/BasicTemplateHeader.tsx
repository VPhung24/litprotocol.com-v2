import { Container } from 'src/components'

import HeaderMenu from './HeaderMenu'

import styles from './basic-template-header.module.scss'

import { ReactComponent as Logo } from './assets/logo.svg'

const BasicTemplateHeader = () => {
  return (
    <Container className={styles.wrapper}>
      <Logo />

      <HeaderMenu />
    </Container>
  )
}

export default BasicTemplateHeader