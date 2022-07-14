import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import styles from './trust-section.module.scss';
import useTranslation from 'next-translate/useTranslation';

export default function TrustSection() {
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <Image width={160} height={40} className={styles.logo} src="/artisan.svg" alt="artisan" />
        </Col>
        <Col>
          <Image width={160} height={40} className={styles.logo} src="/startup2life.png" alt="startup2life" />
        </Col>
        <Col>
          <Image width={160} height={40} className={styles.logo} src="/stripe.png" alt="stripe" />
        </Col>
        <Col>
          <Image width={160} height={40} className={styles.logo} src="/freshworks.svg" alt="freshworks" />
        </Col>
        <Col>
          <Image width={160} height={40} className={styles.logo} src="/zapier.png" alt="zapier" />
        </Col>
      </Row>
    </Container>
  )

}