import styles from './network-card.module.scss'

interface NetworkCardProps {
    index: number
    title: string
    image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const NetworkCard = (props: NetworkCardProps) => {
    const { index, title, image } = props

    const ImageComponent = image

    return (
        <div className={styles.wrapper}>
            <div className={styles.index}>{index+1}</div>

            <div className={styles.image}>
                <ImageComponent />
            </div>

            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default NetworkCard