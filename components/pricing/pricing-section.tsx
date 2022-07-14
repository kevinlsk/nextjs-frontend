import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import styles from './pricing-section.module.scss';
import Button from 'react-bootstrap/Button';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { decorateLinkWithLocale } from 'utils/locale';
import { useContext } from 'react';
import { useGlobalState } from 'utils/use-global-state';

function CustomPricingCard({ title, subtitle, features }) {
  const { t, lang } = useTranslation();

  return (
    <PricingCardBase title={title} subtitle={subtitle} features={features}>
      <Row className={styles.priceRow}>
        <Col>
          <h5>{t("common:pricing-pricing-section-tell-us-what-you-need")}</h5>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button className="w-80 btn-lg" href={decorateLinkWithLocale("/contact", lang)}>{t("common:pricing-pricing-section-talk-to-us")}</Button>
        </Col>
      </Row>
    </PricingCardBase>
  );
}

export function PricingCard({ title, subtitle, price, features, name }) {
  const { t, lang } = useTranslation();
  const [planName, setPlanName] = useGlobalState("planName", "");

  const handleClick = (event) => {
    setPlanName(name);
  };

  return (
    <PricingCardBase title={title} subtitle={subtitle} features={features}>
      <Row className={styles.priceRow}>
        <Col>
          <p className="mb-0 text-muted text-uppercase" style={{ fontSize: 13 }}>{t("common:pricing-pricing-section-starts-from")}</p>
          <h1 className="display-3 font-weight-bold">
            <span className="text-muted" style={{ fontSize: 20, fontWeight: "normal", verticalAlign: "150%" }}>{t("common:pricing-pricing-section-hkd-currency")}</span>
            {price}<span className="text-muted" style={{ fontSize: 20, fontWeight: "normal" }}> {t("common:pricing-pricing-section-per-month")}</span>
          </h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button className="w-80 btn-lg" href={decorateLinkWithLocale("/checkout/create-account", lang)} onClick={handleClick}>{t("common:general-subscribe")}</Button>
        </Col>
      </Row>
    </PricingCardBase>
  );
}

function PricingCardBase({ title, subtitle, features, children }) {
  const items = [];

  features.forEach(f => {
    const item = <li className={styles.pricingListItem} key={f}>
      {f}
    </li>;
    items.push(item);
  });

  return (
    <Container className="border py-4 h-100">
      <Row className="text-center">
        <Col>
          <h4>{title}</h4>
          <h6>{subtitle}</h6>
          <Container className={cn("my-5")}>
            {children}
          </Container>
        </Col>
      </Row>
      <Row className="h-50 justify-content-center pl-4">
        <Col>
          <ul className={cn("list-unstyled", styles.pricingList)}>
            {items}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default function PricingSection() {
  const { t, lang } = useTranslation();

  const standardFeatures = [
    t("common:pricing-pricing-section-card1-item1"),
    t("common:pricing-pricing-section-card1-item2"),
    t("common:pricing-pricing-section-card1-item3"),
    t("common:pricing-pricing-section-card1-item4"),
    t("common:pricing-pricing-section-card1-item5"),
    t("common:pricing-pricing-section-card1-item6"),
    t("common:pricing-pricing-section-card1-item7")
  ];

  const proFeatures = [
    t("common:pricing-pricing-section-card2-item1"),
    t("common:pricing-pricing-section-card2-item2"),
    t("common:pricing-pricing-section-card2-item3"),
    t("common:pricing-pricing-section-card1-item4"),
    t("common:pricing-pricing-section-card1-item5"),
    t("common:pricing-pricing-section-card1-item6"),
    t("common:pricing-pricing-section-card1-item7")
  ];

  const enterpriseFeatures = [
    t("common:pricing-pricing-section-card3-item1"),
    t("common:pricing-pricing-section-card3-item2"),
    t("common:pricing-pricing-section-card3-item3"),
    t("common:pricing-pricing-section-card1-item4"),
    t("common:pricing-pricing-section-card1-item5"),
    t("common:pricing-pricing-section-card1-item6"),
    t("common:pricing-pricing-section-card1-item7")
  ];

  return (
    <Container>
      <h1 className="text-center">{t("common:pricing-pricing-section-title")}</h1>
      <h6 className="text-center">{t("common:pricing-pricing-section-subtitle")}</h6>
      <Row className="mt-5 justify-content-center">
        <Col md={6} lg={4}>
          <PricingCard name="1gb-plan" title={t("common:pricing-pricing-section-card1-title")} subtitle={t("common:pricing-pricing-section-card1-subtitle")} price="$16" features={standardFeatures} />
        </Col>
        <Col md={6} lg={4} className="mt-3 mt-md-0">
          <PricingCard name="3gb-plan" title={t("common:pricing-pricing-section-card2-title")} subtitle={t("common:pricing-pricing-section-card2-subtitle")} price="$38" features={proFeatures} />
        </Col>
        <Col md={6} lg={4} className="mt-3 mt-md-0">
          <CustomPricingCard title={t("common:pricing-pricing-section-card3-title")} subtitle={t("common:pricing-pricing-section-card3-subtitle")} features={enterpriseFeatures} />
        </Col>
      </Row>
    </Container>
  )
}