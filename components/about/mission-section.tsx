import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

export default function MissionSection() {
  const { t, lang } = useTranslation();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={11}>
          <h1 className="text-center">{t("common:about-mission-section-title")}</h1>
          <p className="mt-3 text-justify">{t("common:about-mission-section-content")}</p>
        </Col>
      </Row>
    </Container>
  )
}