import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import CTAButton from './cta-button';
import useTranslation from 'next-translate/useTranslation';
import { decorateLinkWithLocale } from 'utils/locale';

export default function CTASection() {
  const { t, lang } = useTranslation();

  return (
    <Container fluid>
      <Row className="bg-secondary text-center justify-content-center align-items-center" style={{ height: "25rem" }}>
        <Col lg={8}>
            <h1>{t("common:shared-cta-section-title")}</h1>
            <CTAButton className="mt-3" href={decorateLinkWithLocale("/pricing", lang)}>{t("common:general-protect-now")}</CTAButton>
        </Col>
      </Row>
    </Container>
  )
}