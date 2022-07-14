import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

function BenefitCard({ imageSrc, imageAlt, title, content }) {
  return (
    <div className="px-3 py-5 rounded h-100">
      <div className="d-flex">
        <Image width={150} height={150} src={imageSrc} alt={imageAlt} />
      </div>
      <h4 className="mt-3">{title}</h4>
      <p className="mt-1">{content}</p>
    </div>
  )
}

export default function BenefitSection() {
  const { t, lang } = useTranslation();

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h2>{t("common:landing-benefit-section-title")}</h2>
          <h6 className="mt-1">{t("common:landing-benefit-section-subtitle")}</h6>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col sm={4} className="mt-3 mt-lg-0">
          <BenefitCard
            imageSrc="/undraw_Security_on_ff2u.svg"
            imageAlt="protect your copyright"
            title={t("common:landing-benefit-section-card1-title")}
            content={t("common:landing-benefit-section-card1-content")}
          />
        </Col>
        <Col sm={4} className="mt-3 mt-lg-0">
          <BenefitCard
            imageSrc="/undraw_stepping_up_g6oo.svg"
            imageAlt="grow your audience"
            title={t("common:landing-benefit-section-card2-title")}
            content={t("common:landing-benefit-section-card2-content")}
          />
        </Col>
        <Col sm={4} className="mt-3 mt-lg-0">
          <BenefitCard
            imageSrc="/undraw_pie_chart_6efe.svg"
            imageAlt="audience analytics"
            title={t("common:landing-benefit-section-card3-title")}
            content={t("common:landing-benefit-section-card3-content")}
          />
        </Col>
      </Row>
    </Container>
  )
}