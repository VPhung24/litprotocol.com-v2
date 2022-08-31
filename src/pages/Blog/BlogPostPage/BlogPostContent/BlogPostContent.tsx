import { Container } from 'src/components'

import styles from './blog-post-content.module.scss'

import cloudImg from './assets/cloud.png'
import accessImg from './assets/access.png'

const BlogPostContent = () => {
  return (
    <Container>
    <div className={styles.wrapper}>
        <div className={styles.inner}>
        <h2>How do we utilize both technologies, and why?</h2>

        <p>Let’s say that you want to share private content with members of your DAO and they hold a given NFT, with Lit Protocol and Bundlr, you can encrypt and store an image that can be viewed by anyone that holds the NFT from the DAO’s.</p>

        <figure>
          <blockquote>“Lit is building incredible new primitives for decentralized access control, putting privacy first, allowing for targeted, personalized engagement that is private to you & your users.”</blockquote>
          <figcaption>—Dialect</figcaption>
        </figure>

        <p>In this example, we will be encrypting an image (static content) with access control conditions using Lit Protocol, permanently store on Arweave using Bundlr APIs, downloading the encrypted image, and finally decrypting the image that was locked behind an on-chain condition.</p>
        <p>There are a lot of APIs in both technologies, but in this example, we will only focus on the essential parts, encrypting the data and uploading to Arweave. In this example, we will be encrypting an image (static content) with access control conditions using Lit Protocol, permanently store on Arweave using Bundlr APIs, downloading the encrypted image, and finally decrypting the image that was locked behind an on-chain condition.</p>

        <figure>
          <ul>
            <li>Encrypt and lock static content</li>
            <li>Decrypt static content that was locked behind an on-chain condition</li>
            <li>Authorize network signatures that provide access to dynamic content</li>
            <li>Request a network signed JWT that provides access to dynamic content behind an on-chain condition</li>
          </ul>
        </figure>

        <figure className={styles.imageWrapper}>
          <figcaption>DecentralizeD CLOUD  SIGNING (WRITE)</figcaption>
          <img src={cloudImg} />
        </figure>

        <h2>Step A</h2>

        <p>First, we need to encrypt the static content, in our case, an image. In order to do that, we have to do the following steps:</p>

        <figure>
          <ol>
            <li>encryptedString: which is the encrypted image dat;</li>
            <li>symmetricKey: the key to unlocking the encrypted image data.</li>
          </ol>
        </figure>

        <figure className={styles.imageWrapper}>
          <figcaption>DecentralizeD ACCESS CONTROL (READ)</figcaption>
          <img src={accessImg} />
        </figure>

        <h2>Step B</h2>

        <p>Now that we have all 4 information, we can pass it to the litNodeClient.saveEncryptionKey() function. After execution, we will be given:</p>

        <figure>
          <ol>
            <li>encryptedSymmetricKey: the symmetric key has been encrypted using the network public key, and it can only be retrieved if we have all 4 information</li>
          </ol>
        </figure>

        <code>{`const chain = 'ethereum';

          const authSig = await LitJsSdk.checkAndSignAuthMessage({chain})
          
          // Visit here to understand how to encrypt static content
          // <https://developer.litprotocol.com/docs/LitTools/JSSDK/staticContent>
          const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(fileInString);
          
          const encryptedSymmetricKey = await litNodeClient.saveEncryptionKey({
            accessControlConditions: accessControlConditions.accessControlConditions,
            symmetricKey,
            authSig,
            chain,
          });
          
          console.log("encryptedString:", encryptedString);
        `}</code>

        <p>In this example, we will be encrypting an image (static content) with access control conditions using Lit Protocol, permanently store on Arweave using Bundlr APIs, downloading the encrypted image, and finally decrypting the image that was locked behind an on-chain condition.</p>
        <p>There are a lot of APIs in both technologies, but in this example, we will only focus on the essential parts, encrypting the data and uploading to Arweave. In this example, we will be encrypting an image (static content) with access control conditions using Lit Protocol, permanently store on Arweave using Bundlr APIs, downloading the encrypted image, and finally decrypting the image that was locked behind an on-chain condition.</p>
      </div>
      </div>
    </Container>
  )
}

export default BlogPostContent