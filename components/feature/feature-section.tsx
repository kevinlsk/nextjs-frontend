import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

function FeatureItem({ className = '', imageSrc, imageAlt, imagePosition = 'left', children }) {
  let arrangement = <Row>
    <Col>
      <Image width={400} height={300} src={imageSrc} alt={imageAlt} />
    </Col>
    <Col md={6} className="align-self-center">
      {children}
    </Col>
  </Row>

  if (imagePosition === 'right') {
    arrangement = <Row>
      <Col md={6} className="align-self-center order-2 order-md-1">
        {children}
      </Col>
      <Col className="order-1 order-md-2">
        <div className="float-none float-md-right">
          <Image width={400} height={300} src={imageSrc} alt={imageAlt} />
        </div>
      </Col>
    </Row>
  }

  return (
    <Container className={className}>
      {arrangement}
    </Container>
  )
}

export default function FeatureSection() {
  const { t, lang } = useTranslation();

  return (
    <>
      <FeatureItem imageSrc="/undraw_two_factor_authentication_namy.svg" imageAlt="double-encryption">
        <h2>{t("common:features-feature-section-item1-title")}</h2>
        <p className="mt-3">{t("common:features-feature-section-item1-content1")}</p>
        <p>{t("common:features-feature-section-item1-content2")}</p>
      </FeatureItem>
      <FeatureItem className="mt-6" imageSrc="/undraw_Surveillance_re_8tkl.svg" imageAlt="disable-screen-recording" imagePosition="right">
        <h2>{t("common:features-feature-section-item2-title")}</h2>
        <p className="mt-3">{t("common:features-feature-section-item2-content")}</p>
      </FeatureItem>
      <FeatureItem className="mt-6" imageSrc="/undraw_File_searching_re_3evy.svg" imageAlt="dynamic-watermark">
        <h2>{t("common:features-feature-section-item3-title")}</h2>
        <p className="mt-3">{t("common:features-feature-section-item3-content1")}</p>
        <p>{t("common:features-feature-section-item3-content2")}</p>
      </FeatureItem>
    </>
  )
}