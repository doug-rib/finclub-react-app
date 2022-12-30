import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarTop = (props) => {
  let dropdown;
  if (props.dropdown) {
    dropdown = (
      <NavDropdown title="Cotações" id="basic-nav-dropdown">
        <NavDropdown.Item href="/coins">{props.link3}</NavDropdown.Item>
        <NavDropdown.Item href="/crypto">{props.link4}</NavDropdown.Item>
      </NavDropdown>
    );
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">FinClub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/saf">{props.link1}</Nav.Link>
            <Nav.Link href="/investments">{props.link2}</Nav.Link>
            {dropdown}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
