import { Fragment } from "react";
import { Button, Container } from "react-bootstrap";
import Dropdownquotes from "../components/dropdown";
import Footer from "../components/footer";
import NavbarTop from "../components/navbar";

function Index() {
  return (
    <Fragment>
      <NavbarTop
        className="navbar"
        link1="Finaciamento (SAF)"
        link2="Investimentos"
        dropdown={true}
        link3="Moedas"
        link4="Criptoativos"
      />

      <Container
        fluid
        className="header headerInfo strong d-flex flex-column justify-content-center"
      >
        <Container data-aos="fade-down-right" data-aos-duration="2000">
          <div className="contentText p-1">
            <Container>
              <h1>FINCLUB</h1>
              <p>
                Esse projeto foi desenvolvido com a bliblioteca React e o
                framewok bootstrap e tem como objetivo auxiliar qualquer pessoa
                que queira realizar um financiamento e possui alguma dúvida se
                as prestações estão adequadas com a taxa de juros ou fazer uma
                simulação de investimento e saber qual o valor futuro esperado.
                Além de ter duas páginas extras com cotações em tempo real de
                moedas fiduciárias e criptoativos.
              </p>
            </Container>
          </div>
        </Container>
      </Container>

      <Container
        fluid
        className="content SAF weak d-flex flex-column justify-content-center"
      >
        <Container data-aos="fade-down-right" data-aos-duration="2000">
          <div className="contentText p-1">
            <Container>
              <h1>Finaciamento (SAF):</h1>
              <p>
                SAF tem como significado Sitema de Amortização Francês e sua
                principal característica é que todas as prestações tem o mesmo
                valor. Um exemplo muito comum deste tipo de financiamento é o de
                veículos.
              </p>
            </Container>
          </div>

          <Button
            href="/saf"
            className="mt-1 p-3 pe-4 ps-4"
            variant="outline-light"
            size="lg"
          >
            Simular
          </Button>
        </Container>
      </Container>

      <Container
        fluid
        className="content investments d-flex flex-column justify-content-center"
      >
        <Container data-aos="fade-down-right" data-aos-duration="2000">
          <div className="contentText p-1">
            <Container>
              <h1>Investimentos:</h1>
              <p>
                Aqui você pode simular uma situação de investimento onde é
                necessário inserir capital inicial, aporte mensal, em quantos
                meses será feito o resgate e a taxa de juros anual e desta forma
                receber o valor final disponível para uso.
              </p>
            </Container>
          </div>

          <Button
            href="/investments"
            className="mt-1 p-3 pe-4 ps-4"
            variant="outline-light"
            size="lg"
          >
            Simular
          </Button>
        </Container>
      </Container>

      <Container
        fluid
        className="content quotes d-flex flex-column justify-content-center"
      >
        <Container data-aos="fade-down-right" data-aos-duration="2000">
          <div className="contentText p-1">
            <Container>
              <h1>Cotações:</h1>
              <p>
                Aqui você pode observar em tempo real as cotações de moedas
                fiduciárias e criptoativos. Para criação dessas duas páginas
                foram necessários as APIs disponibilizadas pela coinranking.com
                e binance.com
              </p>
            </Container>
          </div>

          <Dropdownquotes />
        </Container>
      </Container>

      <Footer />
    </Fragment>
  );
}

export default Index;
