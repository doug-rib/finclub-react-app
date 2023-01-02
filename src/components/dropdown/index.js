import Dropdown from "react-bootstrap/Dropdown";

function Dropdownquotes() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-light"
        id="dropdown-basic"
        size="lg"
        className="mt-1 p-3 pe-4 ps-4"
      >
        Cotações
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/coins">Moedas</Dropdown.Item>
        <Dropdown.Item href="/crypto">Criptoativos</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdownquotes;
