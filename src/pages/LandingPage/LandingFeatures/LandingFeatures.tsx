import LandingFeature from './LandingFeature'

import { ReactComponent as Wallets } from './assets/wallets.svg'
import { ReactComponent as Encryption } from './assets/encrypt.svg'
import { ReactComponent as AccessControl } from './assets/access-control.svg'

const FEATURES = [
  {
    title: 'Programmable + Distributed Cloud Wallets',
    description:
      'Lit provides distributed MPC wallets that can be used for DeFi automation, verifiable credential issuance, and users wallets that  web2 authentication (e.g Passkey, Discord oAuth).',
    url: {
      label: 'Start With Programmable Key Pairs',
      href: 'https://developer.litprotocol.com/LitActionsAndPKPs/whatAreLitActionsAndPKPs',
    },
    image: Wallets,
  },
  {
    title: 'Encryption + Access Control',
    description:
      'Store private data on the open web with Lit as the access control layer to provision keys to users who meet your on-chain conditions for web3 social and data marketplaces.',
    // url: {
    //   label: 'Start With Encryption',
    //   href: 'https://developer.litprotocol.com/ToolsAndExamples/SDKExamples/EncryptAndDecrypt/setup',
    // },
    url: {
      label: 'Start With ACCESS CONTROL',
      href: 'https://developer.litprotocol.com/AccessControlConditions/intro',
    },
    image: Encryption,
    reverse: true,
  },
  // {
  //   title: 'Access Control',
  //   description:
  //     'Connect applications up to web3 credentials, like NFTs as e-commerce discounts and token gated metaverse spaces',
  //   url: {
  //     label: 'Start With ACCESS CONTROL',
  //     href: 'https://developer.litprotocol.com/AccessControlConditions/intro',
  //   },
  //   image: AccessControl,
  //   width: 652,
  // },
]

const LandingFeatures = () => {
  return (
    <>
      {FEATURES.map((feature, i) => (
        <LandingFeature key={i} {...feature} />
      ))}
    </>
  )
}

export default LandingFeatures
