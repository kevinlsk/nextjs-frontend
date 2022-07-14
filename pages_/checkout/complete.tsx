import Layout from 'components/layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Button from 'react-bootstrap/Button';
import CheckoutLayout from 'components/checkout-layout';

export default function Complete() {
  const { t, lang } = useTranslation();

  return (
    <Layout>
      <section style={{ marginTop: "10rem" }}>
        <CheckoutLayout currentStep="4" showOrderSummary={false}>
          <Container>
            <Row className="mt-6">
              <Col>
                <h2>{t("common:checkout-complete-title")}</h2>
                <div className="mt-3">{t("common:checkout-complete-content")}</div>
                <Button className="mt-5 min-w-25" href={`${process.env.NEXT_PUBLIC_FRONTEND_HOST}/client-dashboard`} size="lg">{t("common:general-get-started")}</Button>
              </Col>
            </Row>
          </Container>
        </CheckoutLayout>
      </section>
      <section style={{ marginBottom: "10rem" }}></section>
    </Layout>
  )
}