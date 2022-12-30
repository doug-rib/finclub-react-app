import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import FinancialForm from "../components/form";
import NavbarTop from "../components/navbar";

const SafScreen = () => {
  return (
    <Fragment>
      <NavbarTop
        className="navbar"
        siteName="Financial"
        link1="Finaciamento (SAF)"
        link2="Investimentos"
        dropdown={true}
        link3="Moedas"
        link4="Criptoativos"
      />

      <Container
        fluid
        className="investmentsForm d-flex flex-column align-items-center justify-content-center"
      >
        <div className="formValues">
          <Container>
            <FinancialForm
              first="Valor do empréstimo:"
              second="Número de meses do financiamento:"
              third="Taxa de juros mensal:"
              result="Valor da prestação:"
              investments={false}
            />
          </Container>
        </div>
      </Container>

      <Footer />
    </Fragment>
  );
};

export default SafScreen;
