import postpool from "../db/postgres.js";

export const getEmpleados = async (req, res) => {
  try {
    const response = await postpool.query("SELECT * FROM empleados");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postEmpleados = async (req, res) => {
  try {
    const {
      identificacion,
      nombres,
      apellidos,
      email,
      tipo_contratacion,
      tipo_empleado,
      cod_facultad,
      cod_sede,
      lugar_nacimiento,
    } = req.body;
    const response = await postpool.query(
      "INSERT INTO empleados (identificacion, nombres, apellidos, email, tipo_contratacion, tipo_empleado, cod_facultad, cod_sede, lugar_nacimiento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
      [
        identificacion,
        nombres,
        apellidos,
        email,
        tipo_contratacion,
        tipo_empleado,
        cod_facultad,
        cod_sede,
        lugar_nacimiento,
      ]
    );
    res.status(200).json({
      message: "Empleado agregado",
      body: { empleado: { identificacion, nombres } },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEmpleadoById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await postpool.query(
      "SELECT * FROM empleados WHERE identificacion = $1",
      [id]
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
