import Layout from 'components/layout';
import CheckoutLayout from 'components/checkout-layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import cn from 'classnames';
import styles from './payment.module.scss';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from 'utils/use-global-state';
import { GetServerSideProps } from 'next';
import { decorateLinkWithLocale } from 'utils/locale';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const referrer = context.req.headers.referer;
  if (!referrer || !referrer.match("/checkout/create-account")) {
    return {
      props: {},
      redirect: {
        destination: decorateLinkWithLocale("/pricing", context.locale),
        permanent: false,
      }
    }
  }

  return {
    props: {}
  };
}

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

async function createSubscription(paymentMethod, planName) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/v1/payment/create-subscription`;
  const params = {
    paymentMethodId: paymentMethod.id,
    planName: planName,
  };

  await fetch(url, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" }
  });
}

async function timeoutSeconds(seconds: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

function PaymentForm() {
  const [validated, setValidated] = useState(false);
  const [planName, setPlanName] = useGlobalState("planName", "");
  const [loading, setLoading] = useState(false);
  const { t, lang } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const cardErrorRef: React.Ref<any> = useRef();
  const router = useRouter();

  const toggleLoading = (isLoading) => {
    setLoading(isLoading);
    const cardElement = elements.getElement(CardElement);
    cardElement.update({ disabled: isLoading });
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    // if (form.checkValidity() === false) {
    //   return;
    // }

    // if (!stripe || !elements) {
    //   return;
    // }

    // toggleLoading(true);

    // const cardElement = elements.getElement(CardElement);

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: cardElement,
    // });

    // if (error) {
    //   console.log('[error]', error);
    //   cardErrorRef.current.classList.add("d-block");
    //   cardErrorRef.current.innerText = error.message;
    //   toggleLoading(false);
    //   return;
    // }

    // console.log('[PaymentMethod]', paymentMethod);

      // FIXME: Disable Stripe for GitHub demo purpose
      toggleLoading(true);
    try {
      // await createSubscription(paymentMethod, planName);
      await timeoutSeconds(1.5);
      router.replace("/checkout/complete");
    } catch (err) {
      toggleLoading(false);
      console.error('fail to create subscription');
      throw err;
    }
  };

  return (
    <Form className="mt-4" noValidate validated={validated} onSubmit={handleSubmit} method="POST" action="/api/create-account">
      <Form.Group controlId="cardNumber">
        <Form.Label>{t("common:general-card-number")}</Form.Label>
        {/* <Form.Control type="text" name="cardNumber" required /> */}
        <div className={cn("border rounded", styles.cardElementContainer)}>
          <CardElement
            options={{
              hidePostalCode: true,
              style: {
                base: {
                  fontSize: '1em',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
            onChange={() => cardErrorRef.current.classList.remove("d-block")}
          />
        </div>
        <Form.Control.Feedback type="invalid" ref={cardErrorRef}>
          {t("common:general-error-empty-line")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="nameOnCard">
        <Form.Label>{t("common:general-name-on-card")}</Form.Label>
        <Form.Control type="text" name="nameOnCard" required disabled={loading} />
        <Form.Control.Feedback type="invalid">
          {t("common:general-error-empty-line")}
        </Form.Control.Feedback>
      </Form.Group>
      <Button className="min-w-25" variant="primary" size="lg" type="submit" disabled={loading}>
        {loading &&
          <Spinner as="span" animation="border" role="status" aria-hidden="true" />
        }
        {!loading &&
          <span>{t("common:general-continue")}</span>
        }
      </Button>
    </Form>
  )
}

export default function Payment() {
  const { t, lang } = useTranslation();

  return (
    <Layout>
      <section style={{ marginTop: "10rem" }}>
        <CheckoutLayout currentStep="2">
          <Container className="mt-6">
            <h2>{t("common:general-payment")}</h2>
            <Row>
              <Col>
                <Elements stripe={stripePromise}>
                  <PaymentForm />
                </Elements>
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