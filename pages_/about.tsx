import Layout from 'components/layout';
import MissionSection from 'components/about/mission-section';
import ValuesSection from 'components/about/values-section';
import CTASection from 'components/shared/cta-section';

export default function About({}) {
  return (
    <Layout>
      <section style={{marginTop: "10rem"}}>
        <MissionSection />
      </section>
      <section style={{marginTop: "10rem"}}>
        <ValuesSection />
      </section>
      <section style={{marginTop: "10rem"}}>
        <CTASection />
      </section>
    </Layout>
  )
}
