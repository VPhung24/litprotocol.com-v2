import styles from './landing-page.module.scss';
import LandingProducts from '../LandingProducts/LandingProducts';
import LandingFeatures from '../LandingFeatures/LandingFeatures';
import LandingUseCases from '../LandingUseCases/LandingUseCases';
import LandingBlog from '../LandingBlog/LandingBlog';
import LandingPartners from '../LandingPartners/LandingPartners';
import LandingCta from '../LandingCta/LandingCta';
import LandingHero from '../LandingHero/LandingHero';

const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <LandingPartners />
      <LandingProducts />
      <LandingFeatures />
      <LandingUseCases />
      <LandingBlog />
      <LandingCta />
    </>
  );
};

export default LandingPage;
