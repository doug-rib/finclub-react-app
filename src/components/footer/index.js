import { Fragment } from "react";
import { Button, Container } from "react-bootstrap";

function Footer() {
  return (
    <Fragment>
      <Container
        fluid
        className="contentFooter d-flex flex-column justify-content-center text-center"
      >
        <Container data-aos="fade-down-right" data-aos-duration="2000">
          <p>
            Para mais informações sobre os serviçoes entre em contato com
            <span className="ms-1 email">douglas.moreira121@hotmail.com</span>
          </p>
          <div>
            <Button
              className="p-3 pe-4 ps-4 me-3"
              variant="outline-light"
              size="lg"
            >
              EXEMPLOS
            </Button>
            <Button className="p-3 pe-4 ps-4" variant="outline-light" size="lg">
              INFORMAÇÕES
            </Button>
          </div>
        </Container>
      </Container>

      <Container
        fluid
        className="footer d-flex justify-content-center text-center"
      >
        <span class="me-4"> Douglas &copy;2022 </span>
        <a href="https://www.instagram.com/" className="me-4">
          Intagram
        </a>
        <a href="https://www.youtube.com/" className="me-4">
          Youtube
        </a>
        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D">
          Twitter
        </a>
      </Container>
    </Fragment>
  );
}

export default Footer;