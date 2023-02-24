import cx from 'classnames'

import { Container } from 'src/components'

import styles from './landing-feature.module.scss'

interface LandingFeatureProps {
  title: string
  description: string
  urls: LandingFeatureUrl[]
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  reverse?: boolean
  width?: number
}

interface LandingFeatureUrl {
  label: string
  href?: string
}

const LandingFeature = (props: LandingFeatureProps) => {
  const {title, description, urls, image, reverse, width} = props

  const ImageComponent = image

  return (
    <Container
      className={cx(styles.wrapper)}
      innerClassName={cx(styles.containerInner, reverse && styles.reverse)}
    >
      <div className={styles.desktopImage}>
        <ImageComponent/>
      </div>

      <div
        className={styles.inner}
        style={{width: width ? `${width}px` : undefined}}
      >
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.image}>
          <ImageComponent/>
        </div>

        <div className={styles.description}>{description}</div>

        <span className={styles.linkContainer}>
          {urls.map((url, i) => {
            return (
              <a key={i} className={styles.link} target={"_blank"} href={url.href}>
                {url.label}
              </a>)
          })
          }
        </span>
      </div>
    </Container>
  )
}

export default LandingFeature
