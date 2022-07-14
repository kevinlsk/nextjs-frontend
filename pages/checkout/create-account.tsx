import Layout from 'components/layout';
import CheckoutLayout from 'components/checkout-layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState, FormEvent } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { useRouter } from 'next/router';

export async function signup(params) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/v1/auth/signup`;

  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" }
    });

    console.log(`status: ${res.status}`);
    res.headers.forEach(console.log);

    // const json = await res.json();
    // return json;
  } catch (err) {
    console.error("fail to sign up");
    throw err;
  }
}

export default function CreateAccount() {
  const [validated, setValidated] = useState(false);
  const { t, lang } = useTranslation();
  const router = useRouter();
  const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();
  const password2Ref: React.RefObject<HTMLInputElement> = React.createRef();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    setValidated(true);
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      return;
    }

    const params = {
      email: form.elements["email"].value,
      firstName: form.elements["firstName"].value,
      lastName: form.elements["lastName"].value,
      password: form.elements["password"].value,
      password2: form.elements["password2"].value
    };

    // FIXME: Comment out for github demo purpose
    // const json = await signup(params);
    router.replace("/checkout/payment");
  };

  const handleOnPasswordChange = () => {
    if (passwordRef.current.value === password2Ref.current.value) {
      password2Ref.current.setCustomValidity('');
    } else {
      password2Ref.current.setCustomValidity('Password not match');
    }
  }

  return (
    <Layout>
      <section style={{ marginTop: "10rem" }}>
        <CheckoutLayout currentStep="1">
          <Container className="mt-6">
            <h2>{t("common:general-create-account")}</h2>
            <Row>
              <Col>
                <Form className="mt-4" noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="firstName">
                      <Form.Label>{t("common:general-first-name")}</Form.Label>
                      <Form.Control type="text" name="firstName" required />
                      <Form.Control.Feedback type="invalid">
                        {t("common:general-error-empty-line")}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastName">
                      <Form.Label>{t("common:general-last-name")}</Form.Label>
                      <Form.Control type="text" name="lastName" required />
                      <Form.Control.Feedback type="invalid">
                        {t("common:general-error-empty-line")}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="email">
                    <Form.Label>{t("common:general-email")}</Form.Label>
                    <Form.Control type="email" name="email" required />
                    <Form.Control.Feedback type="invalid">
                      {t("common:general-error-invalid-email")}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>{t("common:general-password")}</Form.Label>
                    <Form.Control type="password" name="password" ref={passwordRef} onChange={handleOnPasswordChange} pattern=".{8,}" required />
                    <Form.Control.Feedback type="invalid">
                      {t("common:general-error-invalid-password")}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="password2">
                    <Form.Label>{t("common:general-confirm-password")}</Form.Label>
                    <Form.Control type="password" name="password2" ref={password2Ref} onChange={handleOnPasswordChange} pattern=".{8,}" required />
                    <Form.Control.Feedback type="invalid">
                      {t("common:general-error-confirm-password")}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button className="min-w-25" variant="primary" size="lg" type="submit">
                    {t("common:general-continue")}
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </CheckoutLayout>
      </section>
      <section style={{ marginBottom: "10rem" }}>
      </section>
    </Layout>
  )
}
