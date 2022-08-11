import styles from './input.module.scss'

interface InputProps {
    name: string
    type?: string
    placeholder?: string
}

const Input = (props: InputProps) => {
  const { ...rest } = props

  return (
    <div className={styles.wrapper}>
        <input {...rest} />
    </div>
  )
}

export default Input