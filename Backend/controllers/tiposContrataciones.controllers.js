import postpool from "../db/postgres.js";

export const getTiposContrataciones = async (req, res) => {
  try {
    const response = await postpool.query(
      'SELECT * FROM "tipos_contratacion"'
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const postTipoContratacion = async (req, res) => {
  try {
    const { nombre } = req.body;
    const response = await postpool.query(
      'INSERT INTO "tipos_contratacion" (nombre) VALUES ($1)',
      [nombre]
    );
    res.status(200).json({
      message: "Tipo de contratación agregado exitosamente",
      body: {
        tipoContratacion: { nombre },
      },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
