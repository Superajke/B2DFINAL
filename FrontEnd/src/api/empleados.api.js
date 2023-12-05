import axios from "axios";

export const getEmpleados = async () =>
  await axios.get("http://localhost:3000/empleados");

export const getEmpleadoById = async (id) =>
  await axios.get(`http://localhost:3000/empleados/${id}`);

export const postEmpleados = async (empleado) =>
  await axios.post("http://localhost:3000/empleados", empleado);
