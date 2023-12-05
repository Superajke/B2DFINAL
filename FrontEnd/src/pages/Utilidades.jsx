import React from "react";
import PaisesTable from "../components/Tablas/PaisesTable.jsx";
import DepartamentosTable from "../components/Tablas/DepartamentosTable.jsx";
import CiudadesTable from "../components/Tablas/CiudadesTable.jsx";
import SedesTable from "../components/Tablas/SedesTable.jsx";
import TiposContratacionTable from "../components/Tablas/TiposContratacionTable.jsx";
import TiposEmpleadosTable from "../components/Tablas/TiposEmpleadosTable.jsx";
import FacultadesTable from "../components/Tablas/FacultadesTable.jsx";
import AreasTable from "../components/Tablas/AreasTable.jsx";
import ProgramasTable from "../components/Tablas/ProgramasTable.jsx";
import EmpleadosTable from "../components/Tablas/EmpleadosTable.jsx";
import "../css/Utilidades.css";

function Utilidades() {
  return (
    <section className="utilidades">
      <section className="utilidades__container">
        <EmpleadosTable />
        <div
          style={{
            border: "1px solid rgb(255,255,255,0.3)",
            margin: "20px 0",
            width: "55%",
          }}
        ></div>
        <ProgramasTable />
        <div
          style={{
            border: "1px solid rgb(255,255,255,0.3)",
            margin: "20px 0",
            width: "55%",
          }}
        ></div>
        <FacultadesTable />
        <div
          style={{
            border: "1px solid rgb(255,255,255,0.3)",
            margin: "20px 0",
            width: "55%",
          }}
        ></div>
        <AreasTable />
        <div
          style={{
            border: "1px solid rgb(255,255,255,0.3)",
            margin: "20px 0",
            width: "55%",
          }}
        ></div>
        <SedesTable />
        <div
          style={{
            border: "1px solid rgb(255,255,255,0.3)",
            margin: "20px 0",
            width: "55%",
          }}
        ></div>
        <CiudadesTable />
        <div
          style={{
            border: "1px solid rgb(255,255,255,0.3)",
            margin: "20px 0",
            width: "55%",
          }}
        ></div>
        <DepartamentosTable />
        <div
          style={{
            border: "1px solid rgb(255,255,255,0.3)",
            margin: "20px 0",
            width: "55%",
          }}
        ></div>
        <PaisesTable />
        <div
          style={{
            border: "1px solid rgb(255,255,255,0.3)",
            margin: "20px 0",
            width: "55%",
          }}
        ></div>
        <TiposContratacionTable />
        <div
          style={{
            border: "1px solid rgb(255,255,255,0.3)",
            margin: "20px 0",
            width: "55%",
          }}
        ></div>
        <TiposEmpleadosTable />
      </section>
    </section>
  );
}

export default Utilidades;
