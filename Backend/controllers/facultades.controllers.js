import postpool from "../db/postgres.js";

export const getFacultades = async (req, res) => {
  try {
    const response = await postpool.query("SELECT * FROM facultades");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFacultad = async (req, res) => {
  try {
    const response = await postpool.query(
      "SELECT * FROM facultades WHERE codigo = $1",
      [req.params.id]
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postFacultades = async (req, res) => {
  try {
    const { codigo, nombre, ubicacion, nro_telefono } = req.body;
    const response = await postpool.query(
      "INSERT INTO facultades (codigo, nombre, ubicacion, nro_telefono) VALUES ($1, $2, $3, $4)",
      [codigo, nombre, ubicacion, nro_telefono]
    );
    res.status(200).json({
      message: "Facultad agregada",
      body: { facultad: { codigo, nombre } },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
