import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Converter(props) {
  const [coinType, setCoinType] = useState("");
  const [valueToBeConverted, setvalueToBeConverted] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const handlevalueToBeConvertedChange = (event) => {
    setvalueToBeConverted(event.currentTarget.value);
  };

  const handleCoinTypeChange = (event) =>
    setCoinType(event.currentTarget.value);

  const getValueConverted = () => {
    if (coinType === "Dólar") {
      let value = valueToBeConverted / props.coins[0].price.toFixed(2);
      setConvertedValue(value.toFixed(2));
    }
    if (coinType === "Euro") {
      let value = valueToBeConverted / props.coins[1].price.toFixed(2);
      setConvertedValue(value.toFixed(2));
    }
    if (coinType === "Libra") {
      let value = valueToBeConverted / props.coins[2].price.toFixed(2);
      setConvertedValue(value.toFixed(2));
    }
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Valor em reais para conversão:</Form.Label>
        <Form.Control onBlur={handlevalueToBeConvertedChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Converter para:</Form.Label>
        <Form.Select onChange={handleCoinTypeChange}>
          <option></option>
          <option className="conversorOptions">Dólar</option>
          <option className="conversorOptions">Euro</option>
          <option className="conversorOptions">Libra</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Valor convertido:</Form.Label>
        <Form.Control value={convertedValue} disabled />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={getValueConverted}>
        Submit
      </Button>
    </>
  );
}

export default Converter;
