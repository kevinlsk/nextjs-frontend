import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import useTranslation from 'next-translate/useTranslation';

export default function PiracySection() {
  const { t, lang } = useTranslation();

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center">{t('common:landing-why-protect-title')}</h2>
        </Col>
      </Row>
      <Row className="text-center mt-3 justify-content-center">
        <Col md={5} lg={4} className="py-5 px-3 bg-light rounded">
          <p className="display-4 font-weight-bold text-danger">{t("common:landing-economic-lost-title")}</p>
          <p className="text-justify">{t("common:landing-economic-lost")}</p>
        </Col>
        <Col md={5} lg={4} className="py-5 px-3 bg-light rounded ml-md-5 mt-3 mt-md-0">
          <p className="display-4 font-weight-bold text-danger">27%</p>
          <p className="text-justify">{t("common:landing-hk-piracy")}</p>
        </Col>
      </Row>
    </Container>
  )
}