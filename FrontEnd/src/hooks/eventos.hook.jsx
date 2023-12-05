import { useState, useEffect } from "react";
import { getEventos } from "../api/eventos.api";

const useEventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      let events = await getEventos();
      setEventos(events.data);
    };
    getEvents();
  }, []);

  return eventos;
};

export default useEventos;
