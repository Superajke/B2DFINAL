import React from "react";
import useProgramas from "../../hooks/programas.hooks.jsx";

function ProgramasTable() {
  const paises = useProgramas();
  return (
    <>
      <div className="table_top">
        <h1 className="tabla_titulo">Programas</h1>
      </div>
      <table className="eventos__table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Programa</th>
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

export default ProgramasTable;
