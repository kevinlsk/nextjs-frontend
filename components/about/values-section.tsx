import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

function ValueItem({ title, children }) {
  return (
    <Col sm={5} className="mt-4 mt-md-0">
      <div>
        <h4>{title}</h4>
        <p className="mt-2 text-justify">{children}</p>
      </div>
    </Col>
  )
}

function ValueRow({ children }) {
  return (
    <Row className="mt-md-5 justify-content-around">
      {children}
    </Row>
  )
}

export default function ValuesSection() {
  const { t, lang } = useTranslation();

  return (
    <Container>
      <h1 className="text-center">{t("common:about-values-section-title")}</h1>
      <ValueRow>
        <ValueItem title={t("common:about-values-section-item1-title")}>
          {t("common:about-values-section-item1-content")}
        </ValueItem>
        <ValueItem title={t("common:about-values-section-item4-title")}>
          {t("common:about-values-section-item4-content")}
        </ValueItem>
      </ValueRow>
      <ValueRow>
        <ValueItem title={t("common:about-values-section-item2-title")}>
          {t("common:about-values-section-item2-content")}
        </ValueItem>
        <ValueItem title={t("common:about-values-section-item5-title")}>
          {t("common:about-values-section-item5-content")}
        </ValueItem>
      </ValueRow>
      <ValueRow>
        <ValueItem title={t("common:about-values-section-item3-title")}>
          {t("common:about-values-section-item3-content")}
        </ValueItem>
        <ValueItem title={t("common:about-values-section-item6-title")}>
          {t("common:about-values-section-item6-content")}
        </ValueItem>
      </ValueRow>
    </Container>
  )
}