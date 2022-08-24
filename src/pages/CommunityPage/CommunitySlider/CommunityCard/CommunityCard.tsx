import styles from './community-card.module.scss'

interface CommunityCardProps {
    title: string
    subtitle: string
    image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const CommunityCard = (props: CommunityCardProps) => {
  const { title, subtitle, image } = props

  const Image = image

  return (
    <div className={styles.wrapper}>
        <div className={styles.image}>
            <Image />
        </div>

        <div className={styles.text}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>
    </div>
  )
}

export default CommunityCard