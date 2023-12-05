import axios from "axios";

export const getAreas = async () =>
  await axios.get("http://localhost:3000/areas");

export const postAreas = async (area) =>
  await axios.post("http://localhost:3000/areas", area);
