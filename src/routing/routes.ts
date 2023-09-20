// @ts-ignore
import { ComponentClass, FunctionComponent } from 'react';

import {
  LandingPage,
  LicensePage,
  PrivacyPage,
  TermsPage,
  SecurityPage,
} from 'src/pages';

import { PUBLIC_PATHS } from 'src/config';
import { SPARK_LINK } from 'src/constants';

export type IRoutes = {
  path?: string;
  component: FunctionComponent | ComponentClass;
  default?: boolean;
}[];

export type RedirectRoutes = {
  path: string;
  to: string;
}[];

export const privateRoutes: IRoutes = [];

export const publicRoutes: IRoutes = [
  { path: PUBLIC_PATHS.LANDING, component: LandingPage, default: true },
  { path: PUBLIC_PATHS.LICENSE, component: LicensePage },
  { path: PUBLIC_PATHS.PRIVACY, component: PrivacyPage },
  { path: PUBLIC_PATHS.TERMS, component: TermsPage },
  { path: PUBLIC_PATHS.SECURITY, component: SecurityPage },
];

export const redirectRoutes: RedirectRoutes = [
  { path: '/blog', to: SPARK_LINK },
];
