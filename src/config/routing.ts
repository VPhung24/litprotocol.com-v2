export const PRIVATE_PATHS = {}

export const PUBLIC_PATHS = {
  LANDING: '/',
  COMMUNITY: '/community',
  BLOG: '/blog',
  BLOG_POST: '/blog/:slug',
}

export const PATHS = {
  ...PRIVATE_PATHS,
  ...PUBLIC_PATHS,
}
