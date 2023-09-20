import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import remarkRaw from 'rehype-raw';
import { Layout } from 'src/components';
import PrivacyPolicy from './privacy.md';

const PrivacyPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(PrivacyPolicy)
      .then(res => res.text())
      .then(text => setContent(text));
  }, []);

  return (
    <Layout>
      <article className="legal prose">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[remarkRaw] as any}
        />
      </article>
    </Layout>
  );
};

export default PrivacyPage;
