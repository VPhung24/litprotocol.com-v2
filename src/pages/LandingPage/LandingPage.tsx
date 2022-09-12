import { BasicTemplate } from 'src/templates'
import React from "react";

import LandingHero from './LandingHero'
import LandingWorkWith from './LandingWorkWith'
import LandingEvolution from './LandingEvolution'
import LandingNetwork from './LandingNetwork'
import LandingFeatures from './LandingFeatures'
import LandingJoin from './LandingJoin'

import styles from './landing-page.module.scss'

const LandingPage = () => {
  return (
    <BasicTemplate innerClassName={styles.template} color="white">
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