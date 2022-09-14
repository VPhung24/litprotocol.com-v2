import styles from './ready-card.module.scss'

interface ReadyCardProps {
    title: string
    description: string,
    link: string
}

const ReadyCard = (props: ReadyCardProps) => {
  const { title, description, link } = props

  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        
        <div className={styles.inner}>
            <div className={styles.description}>{description}</div>

            <a href={link}>Read more</a>
        </div>
    </div>
  )
}

export default ReadyCard