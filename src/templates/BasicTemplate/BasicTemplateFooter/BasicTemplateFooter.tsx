import { Container } from 'src/components'

import FooterMenu from './FooterMenu'
import Subscription from './Subscription'

import styles from './basic-template-footer.module.scss'

import { ReactComponent as Logo } from './assets/logo.svg'

const BasicTemplateFooter = () => {
  return (
    <Container className={styles.wrapper}>
        <Logo />
        <FooterMenu />
        <Subscription />
    </Container>
  )
}

export default BasicTemplateFooter