import { Container } from 'src/components'

import styles from './blog-post-top.module.scss'

const BlogPostTop = () => {
  return (
    <Container className={styles.wrapper}>
        <h1 className={styles.title}>Lit x Bundlr x Arweave Guide: Private Decentralized Data</h1>

        <div className={styles.inner}>
            <div className={styles.time}>March 29, 2022</div>

            <div className={styles.description}>
                Read this guide on how to encrypt data using Lit Protocol, upload it to Arweave using Bundlr, fetch the Lit encrypted data, and decrypt using Lit Protocol!
            </div>

            <div className={styles.read}>4m read</div>

            <div className={styles.demo}>
                <div className={styles.demoTitle}>Demo</div>

                <div>
                    Repository: <a href="https://github.com/LIT-Protocol/lit-bundlr-example" target="_blank">https://github.com/LIT-Protocol/lit-bundlr-example</a><br/>
                    Demo: <a href="https://lit-bundlr.herokuapp.com" target="_blank">https://lit-bundlr.herokuapp.com</a>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default BlogPostTop