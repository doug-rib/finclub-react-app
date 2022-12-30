import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./screens";
import Coins from "./screens/coins";
import Crypto from "./screens/crypto";
import InvestmentScreen from "./screens/investments";
import SafScreen from "./screens/saf";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/crypto" element={<Crypto />} />
      <Route path="/coins" element={<Coins />} />
      <Route path="/saf" element={<SafScreen />} />
      <Route path="/investments" element={<InvestmentScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
