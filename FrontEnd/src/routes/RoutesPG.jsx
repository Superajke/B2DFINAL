import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Eventos from "../pages/Eventos";

function RoutesPG() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eventos" element={<Eventos />} />
    </Routes>
  );
}

export default RoutesPG;
