import { ComponentClass, FunctionComponent } from 'react'

import {
  LandingPage
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
]
