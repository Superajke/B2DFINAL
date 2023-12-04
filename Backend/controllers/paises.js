import postpool from "../postgres.js";

export const getPaises = async (req, res) => {
  try {
    const response = await postpool.query("SELECT * FROM paises");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postPaises = async (req, res) => {
  try {
    const { codigo, nombre } = req.body;
    const response = await postpool.query(
      "INSERT INTO paises (codigo, nombre) VALUES ($1, $2)",
      [codigo, nombre]
    );
    res
      .status(200)
      .json({ message: "Pais agregado", body: { pais: { codigo, nombre } } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
