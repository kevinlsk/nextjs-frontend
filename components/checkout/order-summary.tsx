import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { useGlobalState } from 'utils/use-global-state';

function OrderItem({ className = "", name, price }) {
  return (
    <Row className="ml-1">
      <Col className={className}>
        {name}
      </Col>
      <Col sm={2} className="text-right">
        {price}
      </Col>
    </Row>
  )
}

export default function OrderSummary() {
  const { t, lang } = useTranslation();

  const plans = {
    "1gb-plan": {
      title: t("common:checkout-order-summary-1gb-plan-title"),
      storageItem: t("common:checkout-order-summary-1gb-plan-storage"),
      uploadingItem: t("common:checkout-order-summary-1gb-plan-uploading"),
      streamingItem: t("common:checkout-order-summary-1gb-plan-streaming"),
      storageItemPrice: "$16",
      uploadingItemPrice: "$0",
      streamingItemPrice: "$0",
    },
    "3gb-plan": {
      title: t("common:checkout-order-summary-3gb-plan-title"),
      storageItem: t("common:checkout-order-summary-3gb-plan-storage"),
      uploadingItem: t("common:checkout-order-summary-3gb-plan-uploading"),
      streamingItem: t("common:checkout-order-summary-3gb-plan-streaming"),
      storageItemPrice: "$38",
      uploadingItemPrice: "$0",
      streamingItemPrice: "$0",
    }
  };

  const [planName, setPlanName] = useGlobalState("planName", "");
  const [currentPlan, setCurrentPlan] = useState(plans["1gb-plan"]);

  // Make sure to add planName as a dependency so that re-render only happens when planName changes
  // https://www.codeproject.com/Questions/5280092/React-maximum-update-depth-exceeded
  useEffect(() => {
    // It's possible that planName is still empty when we try to access.
    // Ignore the empty planName value and wait until there is a valid value.
    if (planName.length === 0) {
      return;
    }
    setCurrentPlan(plans[planName]);
  }, [planName]);

  return (
    <Container className="py-5 px-4 bg-light h-100">
      <div className="font-weight-bold" style={{ fontSize: "1.5rem" }}>{t("common:checkout-order-summary-title")}</div>
      <div className="mt-5">{currentPlan.title}</div>
      <OrderItem name={currentPlan.storageItem} price={currentPlan.storageItemPrice} />
      <OrderItem name={currentPlan.uploadingItem} price={currentPlan.uploadingItemPrice} />
      <OrderItem name={currentPlan.streamingItem} price={currentPlan.streamingItemPrice} />
      <hr className="bg-primary" />
      <OrderItem className="font-weight-bold" name={t("common:checkout-order-total")} price={currentPlan.storageItemPrice} />
    </Container>
  )
}