import BasicTemplateHeader from './BasicTemplateHeader'
import BasicTemplateFooter from './BasicTemplateFooter'

import styles from './basic-template.module.scss'

interface BasicTemplateProps {
  color?: string
}

const BasicTemplate = (props: React.PropsWithChildren<BasicTemplateProps>) => {
  const { color, children } = props

  return (
    <div className={styles.wrapper}>
        <BasicTemplateHeader color={color} />
        
        <div className={styles.inner}>{children}</div>

        <BasicTemplateFooter />
    </div>
  )
}

export default BasicTemplate