// import ListGroup from "react-bootstrap/ListGroup";

// function List(props) {
//   return (
//     <ListGroup className="coinTable mt-3" numbered>
//       {props.coins.slice(0, 10).map((coin) => (
//         <ListGroup.Item variant="transparent">
//           {coin.name} | ${parseFloat(coin.price).toFixed(3)}
//         </ListGroup.Item>
//       ))}
//     </ListGroup>
//   );
// }

import Table from "react-bootstrap/Table";

function ListCoin(props) {
  // const newCoins = [];

  // {
  //   props.coins.forEach((coin) => {
  //     if (
  //       (coin.symbol === "BTCBRL") |
  //       (coin.symbol === "BTCEUR") |
  //       (coin.symbol === "BTCGBP") |
  //       (coin.symbol === "USDTBRL")
  //     ) {
  //       newCoins.push(coin);
  //     }
  //   });
  // }

  return (
    <Table striped bordered hover variant="dark" className="coinTable mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Moeda</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {props.coins.slice(0, 3).map((coin, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{coin.symbol}</td>
            <td>R$ {parseFloat(coin.price).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListCoin;
