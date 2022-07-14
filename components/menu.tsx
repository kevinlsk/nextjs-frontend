import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import styles from './menu.module.scss';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/router';
import { decorateLinkWithLocale } from 'utils/locale';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { setCookie } from 'nookies';

function handleLanguage(event, locale, path) {
  event.preventDefault();
  event.stopPropagation();

  // Do not set the domain with document.location.hostname. Somehow the serialization as a dot prefix to the hostname
  // i.e. it becomes .www.studium.video which is not correct
  // Leave the domain field empty causes browser to fill in the setting for us
  // i.e. www.studium.video
  setCookie(null, "NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  document.location = path;
}

export default function Menu() {
  const { t, lang } = useTranslation();
  const router = useRouter();
  const [loginState, setLoginState] = useState(false);

  const handleLogin = () => setLoginState(true);
  const handleClose = () => setLoginState(false);

  return (
    <>
      <Navbar collapseOnSelect className={styles.navBar} expand="md" variant="light" fixed="top">
        <Container>
          <Navbar.Brand className="mr-5" href={decorateLinkWithLocale('/', lang)}><Image srcSet="/logo.png 300w" sizes="147px" alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href={decorateLinkWithLocale('/features', lang)} className={styles.navLink}>{t("common:general-features")}</Nav.Link>
              <Nav.Link href={decorateLinkWithLocale('/pricing', lang)} className={styles.navLink}>{t("common:general-pricing")}</Nav.Link>
              <Nav.Link href={decorateLinkWithLocale('/about', lang)}>{t("common:general-about")}</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <NavDropdown title={t("common:general-language")} id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={(event) => handleLanguage(event, "en", router.asPath)}>English</NavDropdown.Item>
                <NavDropdown.Item onClick={(event) => handleLanguage(event, "zh", "/zh" + router.asPath)}>中文</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ml-md-5">
              <Nav.Link href="" onClick={handleLogin} className={cn("btn btn-outline-primary", styles.loginButton)}>{t("common:general-login")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={loginState} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton className="border-bottom-0" />
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={6} className="border-lg-right">
                <div className={styles.roleTitle}>{t("common:menu-model-role-title-1")}</div>
                <Button className="mt-3 min-w-25" size="lg" variant="outline-primary" href={`${process.env.NEXT_PUBLIC_FRONTEND_HOST}/client-dashboard`}>{t("common:general-login")}</Button>
              </Col>
              <Col lg={6} className="mt-5 mt-lg-0 pl-lg-5">
                <div className={styles.roleTitle}>{t("common:menu-model-role-title-2")}</div>
                <Button className="mt-3 min-w-25" size="lg" variant="outline-primary" href={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/student/portal?lang=${lang}`}>{t("common:general-login")}</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}