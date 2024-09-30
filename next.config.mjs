import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        { keepBackground: false, grid: false, theme: 'slack-dark' },
      ],
    ],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    mdxRs: false,
  },
  webpack: (config, options) => {
    // Merge the MDX configuration with the default webpack config
    config = withMDX(config);

    // You can add more custom webpack configurations here if needed

    return config;
  },
};

export default nextConfig;
