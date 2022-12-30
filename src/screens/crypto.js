import { Fragment, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import ListCrypto from "../components/listCrypto";
import NavbarTop from "../components/navbar";

const Crypto = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "95bfecdcb3msh95861989bc959a2p1d90c9jsnd8a79b367227",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  async function getCoins() {
    let response = await fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
      options
    );
    let data = await response.json();
    return data.data.coins;
  }

  // async function getCoins() {
  //   let response = await fetch("http://localhost:3000/api/coins.json");
  //   let data = await response.json();
  //   return data;
  // }

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins().then((data) => {
      setCoins(data);
    });
  }, []);

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

      <Container fluid className="crypto">
        <Container className="d-flex flex-column align-items-end">
          <ListCrypto coins={coins} />
        </Container>
      </Container>

      <Footer />
    </Fragment>
  );
};

export default Crypto;
