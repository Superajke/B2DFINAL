import axios from "axios";

export const getPaises = async () =>
  await axios.get("http://localhost:3000/paises");

export const postPaises = async (pais) =>
  await axios.post("http://localhost:3000/paises", pais);
