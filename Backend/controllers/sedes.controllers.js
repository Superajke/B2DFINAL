import postpool from "../postgres.js";

export const getSedes = async (req, res) => {
  try {
    const response = await postpool.query("SELECT * FROM sedes");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const postSedes = async (req, res) => {
  try {
    const { codigo, nombre, codigo_ciudad } = req.body;
    const response = await postpool.query(
      "INSERT INTO sedes (codigo, nombre, codigo_ciudad) VALUES ($1, $2, $3)",
      [codigo, nombre, codigo_ciudad]
    );
    res.status(200).json({
      message: "Sede agregada",
      body: { sede: { codigo, nombre } },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
