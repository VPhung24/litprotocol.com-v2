import Product from '../Product/Product';
import AuthImg from './assets/auth.png';
import AccessImg from './assets/access.png';
import ActionImg from './assets/action.png';
import styles from './landing-products.module.scss';

const LandingProducts = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Limitless Composability for Digital Ownership and Autonomous AI</h2>
          <p className={styles.subtitle}>
            Deploy private agents and programs that run across all blockchains and web2 systems — all without trusted intermediaries.
          </p>
        </div>
        <Product
          badge={'Wallets on Any Chain'}
          title={'Intuitive onboarding that keeps users in control'}
          description={
            'Let users, agents, and smart devices access wallets across chains, secured by familiar authentication methods like social logins, passkeys, or any custom integrations. Deliver effortless onboarding, recovery, and user-centric security—all without users managing private keys.'
          }
          cta={{
            link: 'https://developer.litprotocol.com/user-wallets/overview',
            text: 'Build with Lit wallets',
          }}
          features={[
            {
              title: 'Sessions for Automation',
              description:
                'Authorize signing, decryption, and automation with single-session keys, eliminating repeated authentication.',
              link: 'https://developer.litprotocol.com/sdk/authentication/session-sigs/intro',
            },
            {
              title: 'Chain Abstraction',
              description:
                "Leverage Lit's integrations with Bitcoin, EVM, Solana, Cosmos, and Move to build seamless signing and cross-chain interactions.",
              link: 'https://developer.litprotocol.com/user-wallets/wrapped-keys/generating-wrapped-key',
            },
            {
              title: 'Claimable Wallets',
              description:
                'Easily provision wallets pre-generated from familiar identities like email addresses or phone numbers.',
              link: 'https://developer.litprotocol.com/user-wallets/pkps/claimable-keys/intro',
            },
          ]}
          imgSrc={AuthImg}
          altText={'Sign in modal with multiple authentication options'}
        />
        <hr className={styles.divider}></hr>
        <Product
          badge={'Programmable Encryption'}
          title={
            'Control access and perform compute over private data'
          }
          description={
            'Set custom conditions to control access and perform blind compute over private data, no matter where it’s stored. The Lit network verifies your conditions, enabling decryption only when they are met—never exposing the data itself.'
          }
          cta={{
            link: 'https://developer.litprotocol.com/sdk/access-control/intro',
            text: 'Build with encryption',
          }}
          features={[
            {
              title: 'Universal Access Control',
              description:
                'Easily mix and match conditions using on-chain or off-chain data with boolean logic to define flexible access control rules.',
              link: 'https://developer.litprotocol.com/sdk/access-control/condition-types/boolean-logic',
            },
            {
              title: 'Compute Over Secrets',
              description:
                'Process and analyze encrypted data securely without revealing it, keeping sensitive information private.',
              link: 'https://developer.litprotocol.com/sdk/serverless-signing/combining-decryption-shares',
            },
            {
              title: 'Bridge Web2 and Web3',
              description:
                'Leverage Lit to manage API keys and fetch off-chain data, enabling seamless interoperability between Web2 and Web3.',
              link: 'https://developer.litprotocol.com/sdk/access-control/lit-action-conditions',
            },
          ]}
          imgSrc={AccessImg}
          altText={'Access control modal with option to add rules'}
          reverse={true}
        />
        <hr className={styles.divider}></hr>
        <Product
          badge={'Orchestrate Everything'}
          title={'Smart and private composability across every identity, network, and platform.'}
          description={
            'Builders use Lit as an identity and confidential compute platform to create apps and protocols that connect seamlessly across platforms and crypto networks. Deploy private agents, evolve DeFi, and make private data functional across every part of the web. With Lit Actions, you can build scalable, interoperable products designed for the future of the internet.'
          }
          cta={{
            link: 'https://developer.litprotocol.com/sdk/serverless-signing/overview',
            text: 'Dive into Lit Actions',
          }}
          features={[
            {
              title: 'Autonomous Agents',
              description:
                'Deploy private and programmable agents that act independently, executing tasks and handling data across networks without exposing sensitive information.',
              link: 'https://developer.litprotocol.com/sdk/serverless-signing/quick-start',
            },
            {
              title: 'Cross-Network Composability',
              description:
                'Seamlessly connect apps and protocols across Web2 and all blockchains, enabling secure, interoperable interactions—including the ability to fetch data from any source.',
              link: 'https://developer.litprotocol.com/sdk/serverless-signing/fetch',
            },
            {
              title: 'Build with Ease',
              description:
                'Craft Lit Actions with JavaScript to communicate with any platform or crypto network when your specified on-chain or off-chain conditions are met.',
              link: 'https://developer.litprotocol.com/sdk/serverless-signing/conditional-signing',
            },
          ]}
          imgSrc={ActionImg}
          altText={
            'Lit Actions modal for setting up a new action and its signing conditions'
          }
        />
      </div>
    </section>
  );
};

export default LandingProducts;
