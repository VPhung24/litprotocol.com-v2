import { Portal, Button } from 'src/components'

import styles from './basic-menu.module.scss'

const MENU_ITEMS = [
    {
        label: 'Blog'
    },
    {
        label: 'Community'
    }
  ]

const BasicMenu = () => {
  return (
    <Portal.Wrapper id="basicMenu" width={992}>
        {MENU_ITEMS.map((item, i) => (
              <div className={styles.menuItem} key={i}>
                  <a href="#">{item.label}</a>
              </div>
        ))}
        <Button className={styles.button}>Start Building</Button>
    </Portal.Wrapper>
  )
}

export default BasicMenu