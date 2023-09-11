import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from 'src/components';
import Terms from './terms.md';

const TermsPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(Terms)
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

export default TermsPage;
