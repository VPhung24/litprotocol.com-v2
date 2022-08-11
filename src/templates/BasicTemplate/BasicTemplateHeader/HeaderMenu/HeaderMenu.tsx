import { Button } from 'src/components'

import styles from './header-menu.module.scss'

const MENU_ITEMS = [
    {
        label: 'Blog'
    },
    {
        label: 'Community'
    }
]

const HeaderMenu = () => {
  return (
    <div className={styles.wrapper}>
        {MENU_ITEMS.map((item, i) => (
            <div key={i}>
                <a href="#">{item.label}</a>
            </div>
        ))}

        <Button className={styles.button} color="white">Start Building</Button>
    </div>
  )
}

export default HeaderMenu