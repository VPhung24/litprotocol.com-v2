import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from 'src/components';
import Security from './security.md';

const SecurityPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(Security)
      .then(res => res.text())
      .then(text => setContent(text));
  }, []);

  return (
    <Layout>
      <article className="legal prose">
        <ReactMarkdown children={content} />
      </article>
    </Layout>
  );
};

export default SecurityPage;
