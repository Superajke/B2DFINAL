import React from "react";
import useEmpleados from "../../hooks/empleados.hooks.jsx";

function EmpleadosTable() {
  const paises = useEmpleados();
  return (
    <>
      <div className="table_top">
        <h1 className="tabla_titulo">Empleados</h1>
      </div>
      <table className="eventos__table">
        <thead>
          <tr>
            <th>Identificación</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Tipo Contratación</th>
          </tr>
        </thead>
        <tbody>
          {paises.map((pais) => (
            <tr key={pais.identificacion}>
              <td>{pais.identificacion}</td>
              <td>{pais.nombres}</td>
              <td>{pais.apellidos}</td>
              <td>{pais.email}</td>
              <td>{pais.tipo_contratacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EmpleadosTable;
