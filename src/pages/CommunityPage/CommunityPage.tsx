import { BasicTemplate } from 'src/templates'

import CommunityProjects from './CommunityProjects'
import CommunityQuote from './CommunityQuote'
import CommunityReady from './CommunityReady'
import CommunitySlider from './CommunitySlider'

import styles from './community-page.module.scss'

const CommunityPage = () => {
  return (
    <BasicTemplate color="basic">
      <h1 className={styles.title}>Lit Community</h1>

      <CommunityQuote />

      <CommunityProjects/>

      <CommunitySlider />
      <CommunityReady />
    </BasicTemplate>
  )
}

export default CommunityPage