import cx from 'classnames'

import { Container } from 'src/components'

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
    <Container className={cx(styles.wrapper, reverse && styles.reverse)}>
        <div className={styles.desktopImage}>
          <ImageComponent />
        </div>

        <div className={styles.inner} style={{ width: width ? `${width}px` : undefined}}>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.image}>
            <ImageComponent />
          </div>

          <div className={styles.description}>{description}</div>

          <a className={styles.link} href="#">{url.label}</a>
        </div>
    </Container>
  )
}

export default LandingFeature