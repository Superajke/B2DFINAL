import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Evento.css";

function Evento({ evento_id }) {
  const navigate = useNavigate();
  const evento = evento_id;
  const categorias = evento.categorias ? evento.categorias.join(", ") : "";
  const lugarNombre = evento.lugar.nombre;
  const lugarDireccion = evento.lugar.direccion;
  const ciudadNombre = evento.lugar.ciudad.nombre;
  const ciudadDepartamento = evento.lugar.ciudad.departamento;
  const ciudadPais = evento.lugar.ciudad.pais;
  return (
    <section className="evento">
      <h1 className="evento__titulo">{evento.titulo}</h1>
      <p className="evento__descripcion">{evento.descripcion}</p>
      <p className="evento__categorias">
        <span style={{ color: "var(--primary-color)" }}>Categorías: </span>
        {categorias}
      </p>

      <section className="evento__personas">
        <div>
          <p className="evento__tit_personas">Asistentes:</p>
          <ul>
            {evento.asistentes.map((asistente, index) => (
              <li key={index}>
                <p>Identificador: {asistente.identificador_asis}</p>
                <p>Nombre completo: {asistente.nombreCompleto}</p>
                <p>Tipo de relación: {asistente.tipoRelacion}</p>
                <p>Email: {asistente.email}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="evento__tit_personas">Conferencistas:</p>
          <ul>
            {evento.conferencistas.map((conferencista, index) => (
              <li key={index}>
                <p>Identificador: {conferencista.identificador_conf}</p>
                <p>Nombre completo: {conferencista.nombreCompleto}</p>
                <p>Tipo de relación: {conferencista.tipoRelacion}</p>
                <p>Email: {conferencista.email}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="evento__tit_personas">Facultad Organizadora:</p>
          <ul>
            {evento.facultadesOrganizadoras.map((organizador, index) => (
              <li key={index}>
                <p>Código: {organizador.codigo}</p>
                <p>Facultad: {organizador.nombre}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="evento__tit_personas">Programa Organizador:</p>
          <ul>
            {evento.programasOrganizadores.map((programa, index) => (
              <li key={index}>
                <p>Código: {programa.codigo}</p>
                <p>Programa: {programa.nombre}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <p className="evento__fecha">
        <span style={{ color: "var(--primary-color)" }}>Lugar: </span>{" "}
        {lugarNombre}, {lugarDireccion}, {ciudadNombre}, {ciudadDepartamento},{" "}
        {ciudadPais}
      </p>
      <button className="evento__bttn" onClick={() => window.location.reload()}>
        Volver
      </button>
    </section>
  );
}

export default Evento;
