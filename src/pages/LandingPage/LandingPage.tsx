import { Layout } from 'src/components';
import LandingHero from './LandingHero/LandingHero';
import LandingProducts from './LandingProducts';
import LandingFeatures from './LandingFeatures';
import LandingComparison from './LandingComparison';
import LandingPartners from './LandingPartners/LandingPartners';
import LandingCta from './LandingCta/LandingCta';
import LandingBlog from './LandingBlog/LandingBlog';

const LandingPage = () => {
  return (
    <Layout>
      <div className="gradient-bg"></div>
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
