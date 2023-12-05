import React, { useEffect, useState } from "react";
import { deleteEvento, getEventos } from "../api/eventos.api";
import { useNavigate } from "react-router-dom";
import Evento from "../components/Evento.jsx";
import "../css/Eventos.css";

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [evento, setEvento] = useState(false);
  const [eventoId, setEventoId] = useState("");
  const navigate = useNavigate();

  const fetchEventosData = async () => {
    try {
      const response = await getEventos();
      setEventos(response.data);
    } catch (error) {
      console.error("Error al obtener eventos:", error);
    }
  };

  useEffect(() => {
    fetchEventosData();
  }, []);

  const handleDeleteEvento = async (eventoId) => {
    try {
      await deleteEvento(eventoId);
      fetchEventosData();
    } catch (error) {
      console.error("Error al borrar evento:", error);
    }
  };

  function formatFecha(fecha) {
    const fechaFormateada = new Date(fecha).toLocaleString("es-CO", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  
    return fechaFormateada;
  }

  return (
    <section className="eventos">
      {!evento && (
        <>
          <h1 className="eventos__h1">Eventos</h1>
          <table className="eventos__table">
            <thead>
              <tr>
                <th>Categorías</th>
                <th>Titulo Eventos</th>
                <th>ver</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {eventos.map((evento) => (
                <tr key={evento._id}>
                  <td>{formatFecha(evento.fecha)}</td>
                  <td>{evento.titulo}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setEvento(true);
                      setEventoId(evento);
                    }}
                  >
                    {"👁️"}
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleDeleteEvento(evento._id);
                    }}
                  >
                    {"❌"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {evento && <Evento evento_id={eventoId} />}
    </section>
  );
}

export default Eventos;
