import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
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
        <ReactMarkdown children={content} />
      </article>
    </Layout>
  );
};

export default PrivacyPage;
