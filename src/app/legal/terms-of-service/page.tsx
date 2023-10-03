import Layout from '@/components/Layout/Layout';
import Terms from './terms.mdx';

export default function Home() {
  return (
    <Layout>
      <article className="legal prose">
        <Terms />
      </article>
    </Layout>
  );
}
