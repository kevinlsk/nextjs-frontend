import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from './faq-section.module.scss';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { useState } from 'react';

function CustomToggle({ children, className = "", eventKey, state }) {
  const decoratedOnClick = useAccordionToggle(eventKey, (event) => {
    const [activeKey, setActiveKey] = state;

    if (eventKey === activeKey) {
      setActiveKey(null);
    } else {
      setActiveKey(eventKey);
    }
  });

  return (
    <Card.Header className={className} onClick={decoratedOnClick}>
      {children}
    </Card.Header>
  );
}

function FAQCard({ content, index, state }) {
  const [activeKey, setActiveKey] = state;
  const answers = content.answer.split(/\n/);
  const answerItems = [];
  answers.forEach(ans => {
    const item = <p key={ans}>
      {ans}
    </p>
    answerItems.push(item);
  })

  return (
    <Card className="border-left-0 border-right-0">
      <CustomToggle eventKey={index} state={state} className={cn("font-weight-bold bg-transparent border-bottom-0", styles.cardHeader, activeKey === index ? styles.cardHeaderExpanded :'')}>{content.question}</CustomToggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>{answerItems}</Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default function FAQSection() {
  const { t, lang } = useTranslation();
  const [activeKey, setActiveKey] = useState(0);

  const contents: any = [
    {
      question: t("common:pricing-faq-section-question1"),
      answer: t("common:pricing-faq-section-answer1")
    },
    {
      question: t("common:pricing-faq-section-question2"),
      answer: t("common:pricing-faq-section-answer2")
    },
    {
      question: t("common:pricing-faq-section-question3"),
      // Use double backslash to prevent javascript to insert a real line break.
      // Instead we just use \\n as a split character for further string processing.
      answer: `${t("common:pricing-faq-section-answer3-paragraph1")}
              ${t("common:pricing-faq-section-answer3-paragraph2")}
              ${t("common:pricing-faq-section-answer3-paragraph3")}`
    }
  ];

  const items = [];
  contents.forEach((c, index) => {
    const item = <FAQCard content={c} index={index.toString()} key={`FAQCard_${index}`} state={[activeKey, setActiveKey]} />
    items.push(item);
  });

  return (
    <Container>
      <h2 className="text-center">{t("common:pricing-faq-section-title")}</h2>
      <Row className="mt-5">
        <Col>
          <Accordion>
            {items}
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}