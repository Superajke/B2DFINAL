import postpool from "../db/postgres.js";

export const getAreas = async (req, res) => {
  try {
    const response = await postpool.query("SELECT * FROM areas");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postAreas = async (req, res) => {
  try {
    const { codigo, nombre, facultades_codigo } = req.body;
    const response = await postpool.query(
      "INSERT INTO areas (codigo, nombre, facultades_codigo) VALUES ($1, $2, $3)",
      [codigo, nombre, facultades_codigo]
    );
    res
      .status(200)
      .json({ message: "Area agregada", body: { area: { codigo, nombre } } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
