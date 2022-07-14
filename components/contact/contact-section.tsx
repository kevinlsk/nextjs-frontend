import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './contact-section.module.scss';

export default function ContactSection() {
  const { t, lang } = useTranslation();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="justify-content-between h-100">
        <Col sm={5} className="align-self-stretch">
          <Row className="align-self-start mt-md-5">
            <Col>
              <h1>{t("common:contact-contact-section-title")}</h1>
              <h6 className="mt-3">{t("common:contact-contact-section-subtitle")}</h6>
            </Col>
          </Row>
          <Row className="mt-5 mt-md-7">
            <Col>
              <h4>{t("common:contact-contact-section-need-address")}</h4>
              <Row>
                <Col sm={2}>
                  <label>{t("common:general-phone")}:</label>
                </Col>
                <Col>
                  <span>+852 5716 4983</span>
                </Col>
              </Row>
              <Row>
                <Col sm={2}>
                  <label>{t("common:general-address")}:</label>
                </Col>
                <Col>
                  <span>FLAT/RM 7, 17/F, Comweb Plaza,<br />
                12 Cheung Yue Street,<br />
                Cheung Sha Wan, Kowloon,<br />
                Hong Kong</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="bg-light mt-5 mt-md-0">
          <div className="my-5 mx-3">
            <h3>{t("common:contact-contact-section-contact-our-team")}</h3>
            <Form className="mt-4" noValidate validated={validated} onSubmit={handleSubmit} method="POST" action="/api/contact">
              <Form.Row>
                <input type="text" className={styles.importantField} name="firstName" autoComplete="off" />
                <input type="text" className={styles.importantField} name="lastName" autoComplete="off" />
                <input type="text" className={styles.importantField} name="email" autoComplete="off" />
                <Form.Group as={Col} controlId="DmQ3AuRbrqlXGSnKUqQ9l">
                  <Form.Label>{t("common:general-first-name")}</Form.Label>
                  <Form.Control type="text" name="DmQ3AuRbrqlXGSnKUqQ9l" required />
                  <Form.Control.Feedback type="invalid">
                    {t("common:general-error-empty-line")}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="vlYx8krbjgJCeoWUubIoV">
                  <Form.Label>{t("common:general-last-name")}</Form.Label>
                  <Form.Control type="text" name="vlYx8krbjgJCeoWUubIoV" required />
                  <Form.Control.Feedback type="invalid">
                    {t("common:general-error-empty-line")}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="JO7kjm8vqJPoDq3WCooc3">
                <Form.Label>{t("common:general-email")}</Form.Label>
                <Form.Control type="email" name="JO7kjm8vqJPoDq3WCooc3" required />
                <Form.Control.Feedback type="invalid">
                  {t("common:general-error-invalid-email")}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>{t("common:contact-contact-section-phone")}</Form.Label>
                <Form.Control type="tel" name="phone" pattern="^(\+[0-9]{1,3}){0,1}[0-9 ][0-9 -]{3,}" />
                <Form.Control.Feedback type="invalid">
                  {t("common:contact-contact-section-error-phone")}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="company">
                <Form.Label>{t("common:contact-contact-section-company")}</Form.Label>
                <Form.Control type="text" name="company" />
              </Form.Group>
              <Form.Group controlId="jobTitle">
                <Form.Label>{t("common:contact-contact-section-job-title")}</Form.Label>
                <Form.Control type="text" name="jobTitle" />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>{t("common:contact-contact-section-message")}</Form.Label>
                <Form.Control as="textarea" rows={6} name="message" required />
              </Form.Group>
              <Form.Control type="text" name="lang" value={lang} hidden readOnly />
              <Button style={{ minWidth: "25%" }} variant="primary" type="submit">
                {t("common:general-send")}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}