import Layout from 'components/layout';
import FeatureSection from 'components/feature/feature-section';
import HeroSection from 'components/feature/hero-section';
import ExtraFeatureSection from 'components/feature/extra-feature-section';
import CTASection from 'components/shared/cta-section';

export default function Features() {
  return (
    <Layout>
      <section>
        <HeroSection />
      </section>
      <section style={{marginTop: "10rem"}}>
        <FeatureSection />
      </section>
      <section style={{marginTop: "10rem"}}>
        <ExtraFeatureSection />
      </section>
      <section style={{marginTop: "10rem"}}>
        <CTASection />
      </section>
    </Layout>
  )
}
