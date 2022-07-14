import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import CTAButton from 'components/shared/cta-button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styles from './hero-section.module.scss';
import useTranslation from 'next-translate/useTranslation';
import { decorateLinkWithLocale } from 'utils/locale';

export default function HeroSection() {
  const { t, lang } = useTranslation();

  return (
    <Jumbotron fluid className={styles.jumbotron}>
      <Container className="h-100">
        <Row className="justify-content-center text-center h-100 align-items-center">
          <Col>
            <h1>{t("common:features-hero-section-title")}</h1>
            <div style={{ fontWeight: "bold" }}>{t("common:features-hero-section-subtitle")}</div>
            <CTAButton className="mt-4" href={decorateLinkWithLocale("/pricing", lang)}>{t("common:general-protect-now")}</CTAButton>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}