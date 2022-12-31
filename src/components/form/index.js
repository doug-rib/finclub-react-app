import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { fv, pmt } from "financial";

function FinancialForm(props) {
  const [loanValue, setLoanValue] = useState("");
  const [numberOfIntallments, setNumberOfIntallments] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyContribuition, setMonthlyContribuition] = useState("");
  const [installmentValue, setInstallmentValue] = useState("");

  const handleLoanValueChange = (event) =>
    setLoanValue(event.currentTarget.value.replace(",", "."));

  const handleNumberOfInstallments = (event) =>
    setNumberOfIntallments(event.currentTarget.value.replace(",", "."));

  const handleInterestRate = (event) =>
    setInterestRate(event.currentTarget.value.replace(",", "."));

  const handleMonthlyContribuitionChange = (event) =>
    setMonthlyContribuition(event.currentTarget.value.replace(",", "."));

  const getInstallmentValue = () => {
    if (props.investments) {
      v = fv(
        Math.pow(1 + interestRate / 100, 1 / 12) - 1,
        numberOfIntallments,
        -monthlyContribuition,
        -loanValue
      );
    } else {
      v = pmt(interestRate / 100, numberOfIntallments, -loanValue);
    }
    setInstallmentValue(String(v.toFixed(2)).replace(".", ","));
  };

  let v;
  let extra;
  if (props.investments) {
    extra = (
      <Form.Group className="mb-3">
        <Form.Label>{props.fourth}</Form.Label>
        <Form.Control onBlur={handleMonthlyContribuitionChange} />
      </Form.Group>
    );
  }

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label className="mt-3">{props.first}</Form.Label>
        <Form.Control onBlur={handleLoanValueChange} />
        <Form.Label>{props.second}</Form.Label>
        <Form.Control onBlur={handleNumberOfInstallments} />
        <Form.Label>{props.third}</Form.Label>
        <Form.Control onBlur={handleInterestRate} />
        {extra}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>{props.result}</Form.Label>
        <Form.Control value={installmentValue} disabled />
      </Form.Group>

      <Button
        className="mb-3"
        variant="primary"
        type="submit"
        onClick={getInstallmentValue}
      >
        Submit
      </Button>
    </>
  );
}

export default FinancialForm;
