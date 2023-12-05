import React from "react";
import useDepartamentos from "../../hooks/departamentos.hooks";

function DepartamentosTable() {
  const paises = useDepartamentos();
  return (
    <>
      <div className="table_top">
        <h1 className="tabla_titulo">Departamentos</h1>
        <span style={{ fontSize: "3rem", cursor: "pointer" }}>➕</span>
      </div>
      <table className="eventos__table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Departamento</th>
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

export default DepartamentosTable;
