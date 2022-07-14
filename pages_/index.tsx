import Layout from 'components/layout';
import FeatureSection from 'components/landing/feature-section';
import TrustSection from 'components/landing/trust-section';
import HeroSection from 'components/landing/hero-section';
import PiracySection from 'components/landing/piracy-section';
import CTASection from 'components/shared/cta-section';
import BenefitSection from 'components/landing/benifit-section';
import CustomerSection from 'components/landing/customer-section';

export default function Home() {
  return (
    <Layout>
      <section>
        <HeroSection />
      </section>
      <section className="d-none d-lg-block">
        <TrustSection />
      </section>
      <section style={{ marginTop: "10rem" }}>
        <PiracySection />
      </section>
      <section style={{ marginTop: "10rem" }}>
        <BenefitSection />
      </section>
      <section style={{ marginTop: "10rem" }}>
        <FeatureSection />
      </section>
      <section style={{ marginTop: "10rem" }}>
        <CustomerSection />
      </section>
      <section style={{ marginTop: "10rem" }}>
        <CTASection />
      </section>
    </Layout >
  )
}
