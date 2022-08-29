import { Link } from 'react-router-dom'

import { PATHS } from 'src/config'

import styles from './footer-menu.module.scss'

const MENU_ITEMS = [
    {
        name: PATHS.BLOG,
        label: 'Blog'
    },
    {
        label: 'Twitter'
    },
    {
        name: PATHS.COMMUNITY,
        label: 'Community'
    },
    {
        label: 'LinkedIn'
    },
    {
        label: 'Use Cases'
    },
    {
        label: 'Calendar'
    },
    {
        label: 'Contact'
    },
    {
        label: 'Discord'
    }
]

const FooterMenu = () => {
  return (
    <div className={styles.wrapper}>
        {MENU_ITEMS.map((item, i) => (
            <div key={i}>
                <Link to={item.name || '#'}>{item.label}</Link>
            </div>
        ))}
    </div>
  )
}

export default FooterMenu