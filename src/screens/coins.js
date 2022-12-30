import { Fragment, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Converter from "../components/converter";
import Footer from "../components/footer";
import ListCoin from "../components/listCoin";
import NavbarTop from "../components/navbar";

const Coins = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "95bfecdcb3msh95861989bc959a2p1d90c9jsnd8a79b367227",
      "X-RapidAPI-Host": "binance43.p.rapidapi.com",
    },
  };

  async function getCoins() {
    let response = await fetch(
      "https://binance43.p.rapidapi.com/ticker/price",
      options
    );
    let data = await response.json();
    return data;
  }

  // async function getCoins() {
  //   let response = await fetch("http://localhost:3000/api/dolar.json");
  //   let data = await response.json();
  //   return data;
  // }

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins().then((data) => {
      const newCoins = [];
      data.forEach((coin) => {
        let real = "";
        data.forEach((coin) => {
          if (coin.symbol === "BTCBRL") {
            real = coin.price;
          }
        });
        if (
          (coin.symbol === "BTCEUR") |
          (coin.symbol === "BTCGBP") |
          (coin.symbol === "BTCUSDT")
        ) {
          if (coin.symbol === "BTCUSDT") {
            coin.symbol = "Dólar";
            coin.price = real / coin.price;
          } else if (coin.symbol === "BTCEUR") {
            coin.symbol = "Euro";
            coin.price = real / coin.price;
          } else if (coin.symbol === "BTCGBP") {
            coin.symbol = "Libra esterlina";
            coin.price = real / coin.price;
          }
          newCoins.push(coin);
        }
      });
      setCoins(newCoins);
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

      <Container fluid className="coins">
        <Container className="d-flex flex-column align-items-end">
          <ListCoin coins={coins} />
          <Converter coins={coins} />
        </Container>
      </Container>

      <Footer />
    </Fragment>
  );
};

export default Coins;
