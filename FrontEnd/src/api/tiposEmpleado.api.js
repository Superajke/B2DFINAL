import axios from "axios";

export const getTiposEmpleado = async () =>
  await axios.get("http://localhost:3000/tipos-empleados");

export const postTipoEmpleado = async (tipoEmpleado) =>
  await axios.post("http://localhost:3000/tipos-empleados", tipoEmpleado);
