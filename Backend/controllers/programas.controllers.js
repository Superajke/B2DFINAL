import postpool from "../db/postgres.js";

export const getProgramas = async (req, res) => {
  try {
    const response = await postpool.query("SELECT * FROM programas");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postProgramas = async (req, res) => {
  try {
    const { codigo, nombre, areas_codigo } = req.body;
    const response = await postpool.query(
      "INSERT INTO programas (codigo,nombre,areas_codigo) VALUES ($1,$2,$3)",
      [codigo, nombre, areas_codigo]
    );
    res.status(200).json({
      message: "Programa agregado",
      body: { programa: { codigo, nombre } },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
