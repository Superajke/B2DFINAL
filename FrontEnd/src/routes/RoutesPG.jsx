import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Eventos from "../pages/Eventos";
import Utilidades from '../pages/Utilidades'

function RoutesPG() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/utilidades" element={<Utilidades />} />
    </Routes>
  );
}

export default RoutesPG;
