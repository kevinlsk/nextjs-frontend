import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

function ExtraFeatureCard({ imageSrc, imageAlt, title, content }) {
  return (
    <div className="px-3 py-5 rounded h-100">
      <div className="d-flex">
        <Image width={150} height={150} src={imageSrc} alt={imageAlt} />
      </div>
      <h3 className="mt-3">{title}</h3>
      <p className="mt-1">{content}</p>
    </div>
  )
}

export default function ExtraFeatureSection() {
  const { t, lang } = useTranslation();

  return (
    <Container>
      <Row className="mt-4 justify-content-center">
        <Col sm={4}>
          <ExtraFeatureCard
            imageSrc="/undraw_time_management_30iu.svg"
            imageAlt="playback-time-limit"
            title={t("common:features-extra-feature-section-card1-title")}
            content={t("common:features-extra-feature-section-card1-content")}
          />
        </Col>
        <Col sm={4}>
          <ExtraFeatureCard
            imageSrc="/undraw_subscriptions_1xdv.svg"
            imageAlt="control-audience"
            title={t("common:features-extra-feature-section-card2-title")}
            content={t("common:features-extra-feature-section-card2-content")}
          />
        </Col>
        <Col sm={4}>
          <ExtraFeatureCard
            imageSrc="/undraw_Devices_re_dxae.svg"
            imageAlt="playback-on-any-device"
            title={t("common:features-extra-feature-section-card3-title")}
            content={t("common:features-extra-feature-section-card3-content")}
          />
        </Col>
        <Col sm={4} className="mt-sm-0 mt-md-3">
          <ExtraFeatureCard
            imageSrc="/undraw_connected_world_wuay.svg"
            imageAlt="servers-worldwide"
            title={t("common:features-extra-feature-section-card4-title")}
            content={t("common:features-extra-feature-section-card4-content")}
          />
        </Col>
        <Col sm={4} className="mt-sm-0 mt-md-3">
          <ExtraFeatureCard
            imageSrc="/undraw_online_payments_luau.svg"
            imageAlt="billing"
            title={t("common:features-extra-feature-section-card5-title")}
            content={t("common:features-extra-feature-section-card5-content")}
          />
        </Col>
        <Col sm={4} className="mt-sm-0 mt-md-3">
          <ExtraFeatureCard
            imageSrc="/undraw_contact_us_15o2.svg"
            imageAlt="support"
            title={t("common:features-extra-feature-section-card6-title")}
            content={t("common:features-extra-feature-section-card6-content")}
          />
        </Col>
      </Row>
    </Container>
  )
}