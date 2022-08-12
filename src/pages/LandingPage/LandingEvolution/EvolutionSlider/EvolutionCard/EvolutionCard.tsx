import styles from './evolution-card.module.scss'

interface EvolutionCardProps {
    title: string
    subtitle: string
    image: string
}

const EvolutionCard = (props: EvolutionCardProps) => {
  const { title, subtitle, image } = props
  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>

        <div className={styles.image}>
          <img src={image} />
        </div>
    </div>
  )
}

export default EvolutionCard