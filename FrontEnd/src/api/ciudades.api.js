import axios from "axios";

export const getCiudades = async () =>
  await axios.get("http://localhost:3000/ciudades");

export const postCiudades = async (ciudad) =>
  await axios.post("http://localhost:3000/ciudades", ciudad);
