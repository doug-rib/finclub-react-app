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

function ListCrypto(props) {
  return (
    <Table striped bordered hover variant="dark" className="cryptoTable mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Moeda</th>
          <th>Preço</th>
          <th>Market Cap</th>
          <th>24h</th>
        </tr>
      </thead>
      <tbody>
        {props.coins.slice(0, 10).map((coin, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>
              <img src={coin.iconUrl} alt="x" className="iconImage me-2" />
              {coin.name}
            </td>
            <td>$ {parseFloat(coin.price).toFixed(3)}</td>
            <td>$ {(coin.marketCap / 1000000000).toFixed(4)} Billion</td>
            <td>{coin.change}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListCrypto;
