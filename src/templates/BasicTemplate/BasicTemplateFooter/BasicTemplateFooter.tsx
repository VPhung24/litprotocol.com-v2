import { Container } from 'src/components'

import FooterMenu from './FooterMenu'
import Subscription from './Subscription'

import styles from './basic-template-footer.module.scss'

import { ReactComponent as Logo } from './assets/logo.svg'

const BasicTemplateFooter = () => {
  return (
    <>
      <Container innerClassName={styles.wrapper}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Subscription />
        <FooterMenu />
      </Container>
      <footer className={styles.footer}>
        <p className={styles.footer__company}>A product of WorkGraph, Inc.</p>
        <a
          href="https://nut.sh/ell/forms/352580/YEk9vu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__link}
        >
          Contact
        </a>
        <span className={styles.footer__copyright}> | </span>
        <a href="/legal" className={styles.footer__link}>
          Legal
        </a>
      </footer>
    </>
  )
}

export default BasicTemplateFooter
