import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import styles from './customer-section.module.scss';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';

function CustomerCard({ imageSrc, imageAlt, content, customerName, customerTitle }) {
  return (
    <div className="container border rounded h-100" style={{ padding: "4rem 2rem 3rem 2rem"}}>
      <div className={cn("h-100", styles.quoteContainer)}>
        <Row className="h-50">
          <Col>
            <p>{content}</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={2} className="pr-0">
            <Image width={64} height={64} className={styles.avatar} src={imageSrc} alt={imageAlt} />
          </Col>
          <Col className="px-3">
            <p className="mb-0">{customerName}</p>
            <p className={cn("font-italic", "mt-2", styles.customerTitle)}>{customerTitle}</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default function CustomerSection() {
  const { t, lang } = useTranslation();

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h2>{t("common:landing-customer-section-title")}</h2>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col md={6} className="mt-3 mt-lg-0">
          <CustomerCard
            imageSrc="/undraw_female_avatar_w3jk.svg"
            imageAlt="female customer avatar"
            content={t("common:landing-customer-section-card1-quote")}
            customerName="Alice Tse"
            customerTitle={t("common:landing-customer-section-card1-job-title")}
          />
        </Col>
        <Col md={6} className="mt-3 mt-lg-0">
          <CustomerCard
            imageSrc="/undraw_male_avatar_323b.svg"
            imageAlt="male customer avatar"
            content={t("common:landing-customer-section-card2-quote")}
            customerName="Tony Chan"
            customerTitle={t("common:landing-customer-section-card2-job-title")}
          />
        </Col>
      </Row>
    </Container>
  )
}