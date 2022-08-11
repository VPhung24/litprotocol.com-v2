import LandingFeature from './LandingFeature'

import { ReactComponent as Wallets } from './assets/wallets.svg'
import { ReactComponent as Encryption } from './assets/encryption.svg'
import { ReactComponent as AccessControl } from './assets/access-control.svg'

const FEATURES = [
    {
        title: 'Programmable + Distributed Cloud Wallets',
        description: 'Use Lit as a decentralized serverless function platform to create applications that write data to public state machines like blockchains and storage networks. Create automated agents for user funds and data.',
        url: {
            label: 'Start With Programmable Key Pairs'
        },
        image: Wallets
    },
    {
        title: 'Encryption',
        description: 'Store private data on the open web and use Lit to provision decentralized keys to users based on on-chain data, like the assets they hold in their wallet.',
        url: {
            label: 'Start With Encryption'
        },
        image: Encryption,
        reverse: true
    },
    {
        title: 'Access Control',
        description: 'Connect applications up to web3 credentials, like NFTs as e-commerce discounts and token gated metaverse spaces',
        url: {
            label: 'Start With ACCESS CONTROL'
        },
        image: AccessControl,
        width: 652
    }
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