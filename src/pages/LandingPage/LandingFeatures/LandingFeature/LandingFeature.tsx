import cx from 'classnames'

import styles from './landing-feature.module.scss'

interface LandingFeatureProps {
    title: string
    description: string
    url: {
      label: string
    }
    image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    reverse?: boolean
    width?: number
}

const LandingFeature = (props: LandingFeatureProps) => {
    const { title, description, url, image, reverse, width } = props

  const ImageComponent = image

  return (
    <div className={cx(styles.wrapper, reverse && styles.reverse)}>
        <ImageComponent />

        <div className={styles.inner} style={{ width: width ? `${width}px` : undefined}}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.description}>{description}</div>
          <a className={styles.link} href="#">{url.label}</a>
        </div>
    </div>
  )
}

export default LandingFeature