import cx from 'classnames'

import BasicTemplateHeader from './BasicTemplateHeader'
import BasicTemplateFooter from './BasicTemplateFooter'

import styles from './basic-template.module.scss'

interface BasicTemplateProps {
  innerClassName?: string
  color?: string
}

const BasicTemplate = (props: React.PropsWithChildren<BasicTemplateProps>) => {
  const { innerClassName, color, children } = props

  return (
    <div className={styles.wrapper}>
        <BasicTemplateHeader color={color} />
        
        <div className={cx(styles.inner, innerClassName)}>{children}</div>

        <BasicTemplateFooter />
    </div>
  )
}

export default BasicTemplate