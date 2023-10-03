import Layout from '@/components/Layout/Layout';
import License from './license.mdx';

export default function Home() {
  return (
    <Layout>
      <article className="legal prose">
        <License />
      </article>
    </Layout>
  );
}
