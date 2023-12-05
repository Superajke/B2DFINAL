import React from "react";
import useTiposEmpleado from "../../hooks/tiposEmpleados.hooks.jsx";

function TiposEmpleadoTable() {
  const paises = useTiposEmpleado();
  return (
    <>
      <div className="table_top">
        <h1 className="tabla_titulo">Tipos de Empleado</h1>
      </div>
      <table className="eventos__table">
        <thead>
          <tr>
            <th>Tipo Empleado</th>
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

export default TiposEmpleadoTable;
