import postpool from "../postgres.js";

export const getTiposEmpleados = async (req, res) => {
  try {
    const response = await postpool.query("SELECT * FROM tipos_empleado");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postTipoEmpleado = async (req, res) => {
  try {
    const { nombre } = req.body;
    const response = await postpool.query(
      "INSERT INTO tipos_empleado (nombre) VALUES ($1)",
      [nombre]
    );
    res.status(200).json({
      message: "Tipo de empleado agregado exitosamente",
      body: {
        tipoEmpleado: { nombre },
      },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
