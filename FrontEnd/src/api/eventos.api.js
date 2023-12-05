import axios from "axios";

export const getEventos = async () =>
  await axios.get("http://localhost:3000/evento");

export const deleteEvento = async (id) =>
  await axios.delete(`http://localhost:3000/evento/${id}`);