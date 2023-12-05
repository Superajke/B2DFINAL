import axios from "axios";

export const getProgramas = async () =>
  await axios.get("http://localhost:3000/programas");

export const postProgramas = async (programa) =>
  await axios.post("http://localhost:3000/programas", programa);
