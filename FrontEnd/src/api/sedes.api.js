import axios from "axios";

export const getSedes = async () =>
  await axios.get("http://localhost:3000/sedes");

export const postSedes = async (sede) =>
  await axios.post("http://localhost:3000/sedes", sede);
