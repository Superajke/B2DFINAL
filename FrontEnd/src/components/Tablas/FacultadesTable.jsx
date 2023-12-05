import React from "react";
import useFacultades from "../../hooks/facultades.hooks.jsx";

function FacultadesTable() {
  const paises = useFacultades();
  return (
    <>
      <div className="table_top">
        <h1 className="tabla_titulo">Facultades</h1>
      </div>
      <table className="eventos__table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th># Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {paises.map((pais) => (
            <tr key={pais.codigo}>
              <td>{pais.codigo}</td>
              <td>{pais.nombre}</td>
              <td>{pais.ubicacion}</td>
              <td>{pais.nro_telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FacultadesTable;
