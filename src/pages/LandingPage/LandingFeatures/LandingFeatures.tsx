import LandingFeature from './LandingFeature'

import { ReactComponent as Wallets } from './assets/wallets.svg'
import { ReactComponent as Encryption } from './assets/encrypt.svg'
import { ReactComponent as AccessControl } from './assets/access-control.svg'

const FEATURES = [
  {
    title: 'Programmable + Distributed Cloud Wallets',
    description:
      'Lit provides a network for generating programmable MPC wallets with support for web2 authentication. Use your email or Discord account as a method for creating a distributed, web3 wallet.',
    url: {
      label: 'Start With Programmable Key Pairs',
      href: 'https://developer.litprotocol.com/LitActionsAndPKPs/whatAreLitActionsAndPKPs',
    },
    image: Wallets,
  },
  {
    title: 'Encryption + Access Control',
    description:
      ' Store private data on the open web and use Lit as an access control layer to provision keys to users who meet your on-chain conditions.',
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
