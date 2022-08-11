import cx from 'classnames'

import styles from './container.module.scss'

interface ContainerProps {
    className?: string
}

const Container = (props: React.PropsWithChildren<ContainerProps>) => {
 const { className, children } = props
  return (
    <div className={cx(styles.wrapper, className)}>
        {children}
    </div>
  )
}

export default Container