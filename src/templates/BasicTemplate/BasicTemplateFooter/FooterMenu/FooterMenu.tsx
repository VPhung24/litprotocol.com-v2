import { Link } from 'react-router-dom'

import { PATHS } from 'src/config'

import styles from './footer-menu.module.scss'

const MENU_ITEMS = [
  {
    // name: PATHS.BLOG,
    label: 'Blog',
    href: 'https://spark.litprotocol.com '
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/litprotocol',
  },
  {
    name: PATHS.COMMUNITY,
    label: 'Community',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/lit-protocol/',
  },
  {
    label: 'Use Cases',
    href: 'https://litprotocol.notion.site/Lit-Protocol-Use-Cases-a94916becdc0411f848c3095722c7864'
  },
  {
    label: 'Calendar',
    href: 'https://litgateway.com/calendar',
  },
  {
    label: 'Contact',
    href: 'https://nut.sh/ell/forms/352580/YEk9vu'
  },
  {
    label: 'Discord',
    href: 'https://litgateway.com/discord',
  },
  {
    label: 'Careers',
    href: 'https://jobs.lever.co/litprotocol'
  },
  {
    label: 'Docs',
    href: 'https://developer.litprotocol.com/'
  }
]

const FooterMenu = () => {
  return (
    <div className={styles.wrapper}>
      {MENU_ITEMS.map((item, i) => (
        <div key={i}>
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <Link to={item.name || '#'}>{item.label}</Link>
          )}
        </div>
      ))}
    </div>
  )
}

export default FooterMenu
