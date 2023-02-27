import LandingFeature from './LandingFeature'

import { ReactComponent as Wallets } from './assets/wallets.svg'
import { ReactComponent as Encryption } from './assets/encrypt.svg'
import { ReactComponent as AccessControl } from './assets/access-control.svg'

const FEATURES = [
  {
    title: 'Programmable + Distributed Cloud Wallets',
    description:
      'Lit provides distributed MPC wallets that can be used for DeFi automation, verifiable credential issuance, and native support for web2 authentication (e.g Passkey, Google, Discord oAuth).',
    urls: [{
      label: 'Start With Programmable Key Pairs',
      href: 'https://developer.litprotocol.com/LitActionsAndPKPs/whatAreLitActionsAndPKPs',
    }],
    image: Wallets,
  },
  {
    title: 'Encryption + Access Control',
    description:
      'Store private data on the open web and use Lit as a secure access control layer to provision keys to users who meet your on-chain conditions.',
    urls: [
      // {
      //   label: 'Start With Encryption',
      //   href: 'https://developer.litprotocol.com/ToolsAndExamples/SDKExamples/EncryptAndDecrypt/setup',
      // },
      {
        label: 'Start With ACCESS CONTROL',
        href: 'https://developer.litprotocol.com/AccessControlConditions/intro',
      }
    ],
    image: Encryption,
    reverse: true,
  },
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
