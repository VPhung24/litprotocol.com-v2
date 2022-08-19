import cx from 'classnames'

import styles from './template-wrapper.module.scss'

interface TemplateWrapperProps {
  template?: string
}

const TemplateWrapper = (
  props: React.PropsWithChildren<TemplateWrapperProps>,
) => {
  const { children, template } = props

  return <div className={styles.wrapper}>{children}</div>
}

export default TemplateWrapper
