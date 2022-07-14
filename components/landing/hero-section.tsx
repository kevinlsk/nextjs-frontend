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
      <Container>
        <Row>
          <Col md={6} className="align-self-center order-2 order-md-1">
            <h1>{t('common:landing-hero-title')}</h1>
            <h6 className="mt-1">{t('common:landing-hero-subtitle')}</h6>
            <CTAButton className="mt-4" href={decorateLinkWithLocale("/pricing", lang)}>{t('common:general-protect-now')}</CTAButton>
          </Col>
          <Col className="align-self-center order-1 order-md-2">
            <div className={styles.imageContainer}>
              <Image width={700} height={526} src="/undraw_videographer_nnc7.svg" alt="hero image" />
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}