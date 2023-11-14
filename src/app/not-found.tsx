import Layout from '@/components/Layout/Layout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <article className="legal prose">
        <h1>Page not found</h1>
        <p>
          It seems like the page you&apos;re looking for has moved or
          doesn&apos;t exist.
        </p>
        <Link href="/">Return home &#8594;</Link>
      </article>
    </Layout>
  );
}
