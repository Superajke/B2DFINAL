import React from "react";
import useAreas from "../../hooks/areas.hooks.jsx";

function AreasTable() {
  const paises = useAreas();
  return (
    <>
      <div className="table_top">
        <h1 className="tabla_titulo">Áreas</h1>
      </div>
      <table className="eventos__table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Área</th>
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

export default AreasTable;
