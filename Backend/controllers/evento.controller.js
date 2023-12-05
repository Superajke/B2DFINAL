import Evento from "../models/evento.model.js";
import postpool from "../db/postgres.js";

export const getEventos = async (req, res) => {
    try {
        const eventos = await Evento.find();
        res.status(200).json(eventos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postEvento = async (req, res) => {
  try {
    const {
      lugar,
      facultadesOrganizadoras,
      asistentes,
      programasOrganizadores,
    } = req.body;

    try {
      const city = await postpool.query(
        "SELECT * FROM ciudades WHERE nombre LIKE $1",
        [`%${lugar.ciudad.nombre}%`]
      );

      if (!city.rows.length) {
        return res.status(404).json({ message: "Ciudad no encontrada" });
      }

      for (const facultad of facultadesOrganizadoras) {
        const result = await postpool.query(
          `SELECT * FROM facultades WHERE nombre LIKE '${facultad.nombre}'`
        );

        if (!result.rows.length) {
          return res.status(400).json({
            message: `La facultad '${facultad}' no existe en el sistema`,
          });
        }
      }

      for (const programas of programasOrganizadores) {
        const result = await postpool.query(
          `SELECT * FROM programas WHERE nombre LIKE '${programas.nombre}'`
        );

        if (!result.rows.length) {
          return res.status(400).json({
            message: `La facultad '${programas.nombre}' no existe en el sistema`,
          });
        }
      }

      for (const asistente of asistentes) {
        const result = await postpool.query(
          "SELECT * FROM ciudades WHERE nombre LIKE $1",
          [`%${asistente.ciudad.nombre}%`]
        );

        if (!result.rows.length) {
          return res.status(500).json({
            message: `La ciudad '${asistente.ciudad.nombre}' ingresada en un asistente no existe en el sistema`,
          });
        }
      }

      const evento = new Evento(req.body);
      await evento.save();
      res.status(201).json({ message: "Evento creado exitosamente" });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
