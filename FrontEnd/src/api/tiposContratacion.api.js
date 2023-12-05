import axios from "axios";

export const getTiposContratacion = async () =>
  await axios.get("http://localhost:3000/tipos-contrataciones");

export const postTipoContratacion = async (tipoContratacion) =>
  await axios.post(
    "http://localhost:3000/tipos-contrataciones",
    tipoContratacion
  );
