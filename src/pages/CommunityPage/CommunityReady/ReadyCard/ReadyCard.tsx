import styles from './ready-card.module.scss'

interface ReadyCardProps {
    title: string
    description: string
}

const ReadyCard = (props: ReadyCardProps) => {
  const { title, description } = props

  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        
        <div className={styles.inner}>
            <div>{description}</div>

            <a href="#">Read more</a>
        </div>
    </div>
  )
}

export default ReadyCard