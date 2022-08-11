import cx from 'classnames'

import styles from './button.module.scss'

interface ButtonProps {
    className?: string
    color?: string
}

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const { className, color, children } = props
  return (
    <button className={cx(
      styles.button,
      color && styles[color],
      className
    )}>{children}</button>
  )
}

export default Button