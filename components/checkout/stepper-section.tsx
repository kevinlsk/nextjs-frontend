import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useTranslation from 'next-translate/useTranslation';
import styles from './stepper-section.module.scss';
import cn from 'classnames';

function StepperItem({ step, index, currentStep }) {
  let indexDisplay = index + 1;
  let backgroundColor = "";
  let textColor = "";

  if (index < currentStep) {
    indexDisplay = "✔️";
  } else if (index > currentStep) {
    backgroundColor = styles.inactiveStepperItemBackgroundColor;
    textColor = styles.inactiveStepperItemColor;
  }

  return (
    <div className={cn("d-flex flex-column align-items-center text-center", styles.stepperItem)}>
      <div className={cn("rounded-circle bg-primary d-table-cell align-middle font-weight-bold", styles.stepperItemIndex, backgroundColor)}>
        {indexDisplay}
      </div>
      <div className={cn("text-primary font-weight-bold mt-2", styles.stepperItemName, textColor)}>{step}</div>
    </div>
  )
}

function StepperItemSeparator({ index, currentStep, maxStep }) {
  let backgroundColor = "";

  if (index >= currentStep) {
    backgroundColor = styles.inactiveStepperItemBackgroundColor;
  }

  let separator =
    <div className="d-flex align-items-center">
      <div className={cn("bg-primary", styles.stepperItemSeparator, backgroundColor)}>
      </div>
    </div>
    ;
  if (index >= maxStep) {
    separator = null;
  }

  return separator;
}

export default function StepperSection({ currentStep }) {
  const { t, lang } = useTranslation();

  const steps = [
    t("common:general-select-plan"),
    t("common:general-create-account"),
    t("common:general-payment"),
    t("common:general-complete"),
  ];

  const stepItems = [];
  const maxStep = steps.length - 1;

  steps.forEach((s, index) => {
    const item = <StepperItem step={s} index={index} currentStep={currentStep} key={`StepperItem_${index}`} />
    stepItems.push(item);
    const itemSeparator = <StepperItemSeparator index={index} currentStep={currentStep} maxStep={maxStep} key={`StepperItemSeparator_${index}`} />
    stepItems.push(itemSeparator);
  });

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-between">
            {stepItems}
          </div>
        </Col>
      </Row>
    </Container>
  )
}