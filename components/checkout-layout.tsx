import StepperSection from 'components/checkout/stepper-section';
import OrderSummary from 'components/checkout/order-summary';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useTranslation from 'next-translate/useTranslation';

export default function CheckoutLayout({ currentStep, showOrderSummary = true, children }) {
  const { t, lang } = useTranslation();

  return (
    <Container>
      <Row className="justify-content-between">
        <Col sm={7}>
          <StepperSection currentStep={currentStep}></StepperSection>
          {children}
        </Col>
        <Col sm={4}>
          {showOrderSummary &&
            <OrderSummary></OrderSummary>
          }
        </Col>
      </Row>
    </Container>
  )
}