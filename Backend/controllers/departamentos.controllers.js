import postpool from "../postgres.js";

export const getDepartamentos = async (req, res) => {
  try {
    const response = await postpool.query("SELECT * FROM departamentos");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postDepartamentos = async (req, res) => {
  try {
    const { codigo, nombre, codigo_pais } = req.body;
    const response = await postpool.query(
      "INSERT INTO departamentos (codigo, nombre, codigo_pais) VALUES ($1, $2, $3)",
      [codigo, nombre, codigo_pais]
    );
    res.status(200).json({
      message: "Departamento agregado",
      body: { departamento: { codigo, nombre } },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
