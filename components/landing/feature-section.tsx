
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import useTranslation from 'next-translate/useTranslation';
import { decorateLinkWithLocale } from 'utils/locale';

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
      <FeatureItem imageSrc="/undraw_safe_bnk7.svg" imageAlt="advance security">
        <h2>{t("common:landing-feature-section-item1-title")}</h2>
        <p className="mt-3">{t("common:landing-feature-section-item1-content")}</p>
        <Button variant="primary" href={decorateLinkWithLocale("/features", lang)}>{t("common:general-learn-more")}</Button>
      </FeatureItem>
      <FeatureItem className="mt-6" imageSrc="/undraw_User_flow_re_bvfx.svg" imageAlt="easy to use UI">
        <h2>{t("common:landing-feature-section-item2-title")}</h2>
        <p className="mt-3">{t("common:landing-feature-section-item2-content")}</p>
        <Button variant="primary" href={decorateLinkWithLocale("/features", lang)}>{t("common:general-learn-more")}</Button>
      </FeatureItem>
      <FeatureItem className="mt-6" imageSrc="/undraw_fast_loading_0lbh.svg" imageAlt="smooth streaming experience">
        <h2>{t("common:landing-feature-section-item3-title")}</h2>
        <p className="mt-3">{t("common:landing-feature-section-item3-content")}</p>
        <Button variant="primary" href={decorateLinkWithLocale("/features", lang)}>{t("common:general-learn-more")}</Button>
      </FeatureItem>
    </>
  )
}