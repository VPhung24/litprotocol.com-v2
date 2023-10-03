import Layout from '@/components/Layout/Layout';
import Security from './security.mdx';

export default function Home() {
  return (
    <Layout>
      <article className="legal prose">
        <Security />
      </article>
    </Layout>
  );
}
