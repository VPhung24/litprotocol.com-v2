import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from 'src/components';
import DevLicense from './dev-license.md';

const LicensePage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(DevLicense)
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

export default LicensePage;
