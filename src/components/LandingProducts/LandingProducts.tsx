import Product from '../Product/Product';
import WalletCode from './code/wallet.mdx';
import AccCode from './code/acc.mdx';
import ActionCode from './code/action.mdx';

const LandingProducts = () => {
  return (
    <>
      <Product
        badge={'Programmable Wallets'}
        title={
          'Streamline user experience with programmable, distributed wallets'
        }
        description={
          'Empower your users with multi-party computation (MPC) wallets secured by intuitive authentication like social logins and passkeys. Deliver seamless onboarding, easy recovery, and user-centric security features—all without worrying about managing private keys.'
        }
        cta={{
          link: 'https://developer.litprotocol.com/v3/sdk/wallets/intro',
          text: 'Build with Lit wallets',
        }}
        features={[
          {
            title: 'Claimable wallets',
            description:
              'Effortlessly provision wallets that are pre-generated from human-readable identities, such as emails or phone numbers.',
            link: 'https://developer.litprotocol.com/v3/concepts/claimable-keys',
          },
          {
            title: 'Session keys',
            description:
              'Create temporary, permissioned session keys, enabling users to interact with your platform in a frictionless, secure way.',
            link: 'https://developer.litprotocol.com/v3/sdk/authentication/session-sigs/intro',
          },
          {
            title: 'Popular integrations',
            description:
              "Use Lit's ready-made integrations with ethers.js and WalletConnect to quickly build signing and dapp interactions.",
            link: 'https://developer.litprotocol.com/v3/sdk/wallets/walletconnect',
          },
        ]}
        CodeBlock={WalletCode}
      />
      <Product
        badge={'Decentralized Encryption'}
        title={
          'Store private data on the open web with flexible access control'
        }
        description={
          'Define conditional rules to control access to confidential data, stored anywhere. Lit will validate your rules and grant decryption capabilities, without ever accessing the private data.'
        }
        cta={{
          link: 'https://developer.litprotocol.com/v3/sdk/access-control/intro',
          text: 'Integrate access control',
        }}
        features={[
          {
            title: 'Identity-based encryption',
            description:
              'Safeguard private data with client-side encryption, and grant decryption keys only when defined conditions are met.',
            link: 'https://developer.litprotocol.com/v3/sdk/access-control/encryption',
          },
          {
            title: 'Access control conditions',
            description:
              'Easily mix and match conditions, deciding which on-chain or off-chain data can unlock your private content.',
            link: 'https://developer.litprotocol.com/v3/sdk/access-control/condition-types/unified-access-control-conditions',
          },
          {
            title: 'JWT signing',
            description:
              'Define access control conditions to sign JWTs that can be used to load dynamic content from a server.',
            link: 'https://developer.litprotocol.com/v3/sdk/access-control/jwt-auth',
          },
        ]}
        CodeBlock={AccCode}
      />
      <Product
        badge={'Serverless Functions'}
        title={'Scale your apps with serverless automations'}
        description={
          'Write serverless function logic in your preferred language to drive event-based signing, encryption, and identity management. Ship and iterate faster without the burden of scaling key infrastructure.'
        }
        cta={{
          link: 'https://developer.litprotocol.com/v2/LitActions/intro',
          text: 'Dive into Lit Actions',
        }}
        features={[
          {
            title: 'Conditional signing',
            description:
              'Write immutable logic to generate signatures when your specified on-chain conditions are met.',
            link: 'https://developer.litprotocol.com/v2/LitActions/workingWithActions/conditionalSigning',
          },
          {
            title: 'Off-chain fetching',
            description:
              'Read and write off-chain data via HTTP requests, natively supported in Lit Actions, eliminating the need for third party oracles.',
            link: 'https://developer.litprotocol.com/v2/LitActions/workingWithActions/usingFetch',
          },
          {
            title: 'Secure infrastructure',
            description:
              'Lit leverages a secure JavaScript runtime and advanced hardware protection to ensure that your code is tamper-proof.',
            link: 'https://developer.litprotocol.com/v3/resources/how-it-works',
          },
        ]}
        CodeBlock={ActionCode}
      />
    </>
  );
};

export default LandingProducts;
