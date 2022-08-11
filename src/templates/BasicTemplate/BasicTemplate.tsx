import BasicTemplateHeader from './BasicTemplateHeader'
import BasicTemplateFooter from './BasicTemplateFooter'

import styles from './basic-template.module.scss'

const BasicTemplate = (props: React.PropsWithChildren<{}>) => {
    const { children } = props

  return (
    <div className={styles.wrapper}>
        <BasicTemplateHeader />
        
        <div className={styles.inner}>{children}</div>

        <BasicTemplateFooter />
    </div>
  )
}

export default BasicTemplate