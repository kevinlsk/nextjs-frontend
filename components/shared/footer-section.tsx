import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import styles from './footer-section.module.scss';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';

export default function FooterSection(props) {
  const { t, lang } = useTranslation();

  return (
    <Container fluid className={cn('bg-primary', 'text-light', 'pt-5', styles.footerContainer)}>
      <Row className="justify-content-center h-75">
        <Col md={2}>
          <div className="text-uppercase font-weight-bolder">{t("common:general-product")}</div>
          <ul className="list-unstyled mt-3">
            <li>
              <Link href="/"><a className={styles.a}>{t("common:general-home")}</a></Link>
            </li>
            <li>
              <Link href="/features"><a className={styles.a}>{t("common:general-features")}</a></Link>
            </li>
            <li>
              <Link href="/pricing"><a className={styles.a}>{t("common:general-pricing")}</a></Link>
            </li>
          </ul>
        </Col>
        <Col md={2} className="mt-md-0 mt-sm-5">
          <div className="text-uppercase font-weight-bolder">{t("common:general-company")}</div>
          <ul className="list-unstyled mt-3">
            <li>
              <Link href="/about"><a className={styles.a}>{t("common:general-about")}</a></Link>
            </li>
            <li>
              <Link href="/contact"><a className={styles.a}>{t("common:general-contact-us")}</a></Link>
            </li>
            <li>
              <Link href="/terms-of-service"><a className={styles.a}>{t("common:general-terms-of-service")}</a></Link>
            </li>
            <li>
              <Link href="/privacy-policy"><a className={styles.a}>{t("common:general-privacy-policy")}</a></Link>
            </li>
          </ul>
        </Col>
        <Col md={3} lg={2}>
          <div className="text-uppercase font-weight-bolder">{t("common:general-follow")}</div>
          <div className="mt-3">
            <Link href="https://twitter.com/studium_video"><a><Image style={{ width: 32, height: 32 }} src="/twitter.png" alt="twitter" /></a></Link>
            <Link href="https://www.instagram.com/studium.video.2021"><a className="ml-3"><Image style={{ width: 32, height: 32 }} src="/instagram.png" alt="instagram" /></a></Link>
            <Link href="https://www.facebook.com/studium.video.streaming"><a className="ml-3"><Image style={{ width: 32, height: 32 }} src="/facebook.png" alt="facebook" /></a></Link>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center text-center align-items-end h-25">
        <Col md={6}>
          <p>© 2020 ConfluxOne Limited. {t("common:general-all-rights-reserved")}.</p>
        </Col>
      </Row>
    </Container>
  )
}