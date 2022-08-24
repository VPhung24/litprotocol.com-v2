import { BasicTemplate } from 'src/templates'

import CommunityProjects from './CommunityProjects'
import CommunitySlider from './CommunitySlider'

import styles from './community-page.module.scss'

const CommunityPage = () => {
  return (
    <BasicTemplate color="basic">
      <CommunityProjects/>
      
      <CommunitySlider />
    </BasicTemplate>
  )
}

export default CommunityPage