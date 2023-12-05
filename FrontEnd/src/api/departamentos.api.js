import axios from "axios";

export const getDepartamentos = async () =>
  await axios.get("http://localhost:3000/departamentos");

export const postDepartamentos = async (departamento) =>
  await axios.post("http://localhost:3000/departamentos", departamento);
