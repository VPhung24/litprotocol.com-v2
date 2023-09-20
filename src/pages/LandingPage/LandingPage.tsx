import { Layout } from 'src/components';
// import LandingHero from './LandingHero'
import LandingHero from './LandingHeroV1/LandingHero';
import LandingProducts from './LandingProducts';
import LandingFeatures from './LandingFeatures';
import LandingComparison from './LandingComparison';
// import LandingPartners from './LandingPartners';
import LandingPartners from './LandingPartnersV1/LandingPartners';
import LandingCta from './LandingCta/LandingCta';
import LandingBlog from './LandingBlog/LandingBlog';

const LandingPage = () => {
  return (
    <Layout>
      <LandingHero />
      <LandingPartners />
      <LandingProducts />
      <LandingFeatures />
      <LandingComparison />
      <LandingBlog />
      <LandingCta />
    </Layout>
  );
};

export default LandingPage;
