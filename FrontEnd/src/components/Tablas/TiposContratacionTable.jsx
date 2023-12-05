import React from "react";
import useTiposContr from "../../hooks/tiposContratacion.hooks.jsx";

function TiposContratacionTable() {
  const paises = useTiposContr();
  return (
    <>
      <div className="table_top">
        <h1 className="tabla_titulo">Tipos de Contratación</h1>
        <span style={{ fontSize: "3rem", cursor: "pointer" }}>➕</span>
      </div>
      <table className="eventos__table">
        <thead>
          <tr>
            <th>Tipo Contratación</th>
          </tr>
        </thead>
        <tbody>
          {paises.map((pais) => (
            <tr key={pais.nombre}>
              <td>{pais.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TiposContratacionTable;
