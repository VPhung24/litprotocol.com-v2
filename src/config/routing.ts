export const PRIVATE_PATHS = {};

export const PUBLIC_PATHS = {
  LANDING: '/',
  COMMUNITY: '/community',
  BLOG: '/blog',
  BLOG_POST: '/blog/:slug',
  TERMS: '/legal/terms-of-service',
  LICENSE: '/legal/developer-license',
  PRIVACY: '/legal/privacy-policy',
  SECURITY: '/legal/security-commitments',
};

export const PATHS = {
  ...PRIVATE_PATHS,
  ...PUBLIC_PATHS,
};
