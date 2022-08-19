import { ComponentClass, FunctionComponent } from 'react'

import {
  LandingPage,
  CommunityPage
} from 'src/pages'

import { PRIVATE_PATHS, PUBLIC_PATHS } from 'src/config'

export type IRoutes = {
  path?: string
  component: FunctionComponent | ComponentClass
  default?: boolean
}[]

export const privateRoutes: IRoutes = []

export const publicRoutes: IRoutes = [
  { path: PUBLIC_PATHS.LANDING, component: LandingPage, default: true },
  { path: PUBLIC_PATHS.COMMUNITY, component: CommunityPage }
]
