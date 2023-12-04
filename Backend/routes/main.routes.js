import { Router } from "express";
import paisesRoutes from "./paises.routes.js";
import areasRoutes from "./areas.routes.js";
import ciudadesRoutes from "./ciudades.routes.js";
import empleadosRoutes from "./empleados.routes.js";
import tiposContRoutes from "./tiposContrataciones.routes.js";
import facultadesRotues from "./facultades.routes.js";
import sedesRoutes from "./sedes.routes.js";
import programasRoutes from "./programas.routes.js";
import tiposEmpleadosRoutes from "./tiposEmpleados.routes.js";
import departamentosRoutes from "./departamentos.routes.js";

const router = Router();

router.use(paisesRoutes);
router.use(areasRoutes);
router.use(ciudadesRoutes);
router.use(empleadosRoutes);
router.use(facultadesRotues);
router.use(sedesRoutes);
router.use(programasRoutes);
router.use(tiposContRoutes);
router.use(tiposEmpleadosRoutes);
router.use(departamentosRoutes);

export default router;
