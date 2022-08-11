import styles from './footer-menu.module.scss'

const MENU_ITEMS = [
    {
        label: 'Blog'
    },
    {
        label: 'Twitter'
    },
    {
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
                <a href="#">{item.label}</a>
            </div>
        ))}
    </div>
  )
}

export default FooterMenu