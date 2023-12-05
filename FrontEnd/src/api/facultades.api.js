import axios from "axios";

export const getFacultades = async () =>
  await axios.get("http://localhost:3000/facultades");

export const postFacultades = async (facultad) =>
  await axios.post("http://localhost:3000/facultades", facultad);
