import cx from 'classnames'

import styles from './container.module.scss'

interface ContainerProps {
    className?: string
    innerClassName?: string
}

const Container = (props: React.PropsWithChildren<ContainerProps>) => {
 const { className, innerClassName, children } = props
  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={cx(styles.inner, innerClassName)}>
        {children}
      </div>
    </div>
  )
}

export default Container