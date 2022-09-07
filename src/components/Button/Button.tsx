import cx from 'classnames'

import styles from './button.module.scss'

interface ButtonProps {
  className?: string
  color?: string
  href?: string
}

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const { className, color = 'basic', children, href } = props
  return (
    <a href={href}>
      <button className={cx(styles.button, color && styles[color], className)}>
        {children}
      </button>
    </a>
  )
}

export default Button
