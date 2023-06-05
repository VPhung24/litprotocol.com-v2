import { BasicTemplate } from 'src/templates'
import { Container, Icons } from 'src/components'

import styles from './legal-page.module.scss'
import { LICENSE_LINK, PRIVACY_LINK, TERMS_LINK } from 'src/constants'

const LegalPage = () => {
  return (
    <BasicTemplate>
      <Container className={styles.wrapper}>
        <h1 className={styles.title}>Legal</h1>
        <div className={styles.links}>
          <a
            href={TERMS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Terms of Service
            <Icons.Arrow />
          </a>
          <a
            href={LICENSE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Developer API and SDK License Agreement
            <Icons.Arrow />
          </a>
          <a
            href={PRIVACY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Privacy Policy
            <Icons.Arrow />
          </a>
        </div>
      </Container>
    </BasicTemplate>
  )
}

export default LegalPage
