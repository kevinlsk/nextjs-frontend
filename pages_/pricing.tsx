import Layout from 'components/layout';
import PricingSection from 'components/pricing/pricing-section';
import FAQSection from 'components/pricing/faq-section';

export default function Pricing() {
  return (
    <Layout>
      <section style={{ marginTop: "10rem" }}>
        <PricingSection />
      </section>
      <section style={{ marginTop: "10rem" }}>
        <FAQSection />
      </section>
      <section style={{ marginBottom: "10rem" }}>
      </section>
    </Layout>
  )
}
