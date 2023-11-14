import Layout from '@/components/Layout/Layout';
import Privacy from './privacy.mdx';

export default function Home() {
  return (
    <Layout>
      <article className="legal prose">
        <Privacy />
      </article>
    </Layout>
  );
}
