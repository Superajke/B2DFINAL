import React from "react";
import PaisesTable from "../components/Tablas/PaisesTable.jsx";
import DepartamentosTable from "../components/Tablas/DepartamentosTable.jsx";
import CiudadesTable from "../components/Tablas/CiudadesTable.jsx";
import SedesTable from "../components/Tablas/SedesTable.jsx";
import TiposContratacionTable from "../components/Tablas/TiposContratacionTable.jsx";
import TiposEmpleadosTable from "../components/Tablas/TiposEmpleadosTable.jsx";
import FacultadesTable from '../components/Tablas/FacultadesTable.jsx'
import "../css/Utilidades.css";

function Utilidades() {
  return (
    <section className="utilidades">
      <section className="utilidades__container">
        <PaisesTable />
        <DepartamentosTable />
        <CiudadesTable />
        <SedesTable />
        <TiposContratacionTable />
        <TiposEmpleadosTable />
        <FacultadesTable/>
      </section>
    </section>
  );
}

export default Utilidades;
