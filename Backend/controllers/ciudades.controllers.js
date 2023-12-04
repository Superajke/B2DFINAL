import postpool from "../postgres.js";

export const getCiudades = async (req, res) => {
  try {
    const response = await postpool.query("SELECT * FROM ciudades");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postCiudades = async (req, res) => {
  try {
    const { codigo, nombre, codigo_departamento } = req.body;
    const response = await postpool.query(
      "INSERT INTO ciudades (codigo, nombre, codigo_departamento) VALUES ($1, $2, $3)",
      [codigo, nombre, codigo_departamento]
    );
    res
      .status(200)
      .json({
        message: "Ciudad agregada",
        body: { ciudad: { codigo, nombre } },
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
