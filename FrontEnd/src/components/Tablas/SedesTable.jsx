import React from "react";
import useSedes from "../../hooks/sedes.hooks.jsx";

function PaisesTable() {
  const paises = useSedes();
  return (
    <>
      <div className="table_top">
        <h1 className="tabla_titulo">Sedes</h1>
        <span style={{ fontSize: "3rem", cursor: "pointer" }}>➕</span>
      </div>
      <table className="eventos__table">
        <thead>
          <tr>
            <th>Código</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {paises.map((pais) => (
            <tr key={pais.codigo}>
              <td>{pais.codigo}</td>
              <td>{pais.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PaisesTable;
