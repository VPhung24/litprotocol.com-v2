import { ComponentClass, FunctionComponent } from 'react'

import {
  LandingPage,
  CommunityPage,
  BlogPage,
  BlogPostPage,
  LegalPage,
} from 'src/pages'

import { PRIVATE_PATHS, PUBLIC_PATHS } from 'src/config'
import {
  LICENSE_LINK,
  PRIVACY_LINK,
  SPARK_LINK,
  TERMS_LINK,
} from 'src/constants'

export type IRoutes = {
  path?: string
  component: FunctionComponent | ComponentClass
  default?: boolean
}[]

export type RedirectRoutes = {
  path: string
  to: string
}[]

export const privateRoutes: IRoutes = []

export const publicRoutes: IRoutes = [
  { path: PUBLIC_PATHS.LANDING, component: LandingPage, default: true },
  { path: PUBLIC_PATHS.COMMUNITY, component: CommunityPage },
  { path: PUBLIC_PATHS.BLOG, component: BlogPage },
  { path: PUBLIC_PATHS.BLOG_POST, component: BlogPostPage },
  { path: PUBLIC_PATHS.LEGAL, component: LegalPage },
]

export const redirectRoutes: RedirectRoutes = [
  { path: '/blog', to: SPARK_LINK },
  { path: '/legal/terms', to: TERMS_LINK },
  { path: '/legal/license', to: LICENSE_LINK },
  { path: '/legal/privacy', to: PRIVACY_LINK },
]
