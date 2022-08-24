import { BasicTemplate } from 'src/templates'

import CommunityProjects from './CommunityProjects'
import CommunityQuote from './CommunityQuote'
import CommunitySlider from './CommunitySlider'

import styles from './community-page.module.scss'

const CommunityPage = () => {
  return (
    <BasicTemplate color="basic">
      <CommunityProjects/>

      <CommunityQuote />
      
      <CommunitySlider />
    </BasicTemplate>
  )
}

export default CommunityPage