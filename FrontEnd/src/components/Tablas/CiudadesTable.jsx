import React from "react";
import useCiudades from "../../hooks/ciudades.hooks";

function CiudadesTable() {
  const paises = useCiudades();
  return (
    <>
      <div className="table_top">
        <h1 className="tabla_titulo">Ciudades</h1>
        <span style={{ fontSize: "3rem", cursor: "pointer" }}>➕</span>
      </div>
      <table className="eventos__table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Ciudad</th>
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

export default CiudadesTable;
