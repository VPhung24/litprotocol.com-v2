import { BasicTemplate } from 'src/templates'

import LandingHero from './LandingHero'
import LandingWorkWith from './LandingWorkWith'
import LandingEvolution from './LandingEvolution'
import LandingNetwork from './LandingNetwork'
import LandingFeatures from './LandingFeatures'
import LandingJoin from './LandingJoin'

const LandingPage = () => {
  return (
    <BasicTemplate>
      <LandingHero />

      <LandingWorkWith />

      <LandingEvolution />

      <LandingNetwork />

      <LandingFeatures />

      <LandingJoin />
    </BasicTemplate>
  )
}

export default LandingPage