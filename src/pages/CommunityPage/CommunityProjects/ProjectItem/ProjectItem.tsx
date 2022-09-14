import { Icons } from 'src/components'

import styles from './project-item.module.scss'

interface ProjectItemProps {
    name: string
    description: string
    image: string
    link: string
}

const ProjectItem = (props: ProjectItemProps) => {
  const { name, description, image, link } = props

  return (
    <div className={styles.wrapper}>
        <div className={styles.name}>
            {name}
          <a href={link}>
            <Icons.Arrow />
          </a>
        </div>

        <div className={styles.logo}>
            <img src={image} />
        </div>

        <div className={styles.description}>
            {description}
        </div>
    </div>
  )
}

export default ProjectItem