import { Router } from "express";
import paisesRoutes from "./paises.routes.js";
import areasRoutes from "./areas.routes.js";
import ciudadesRoutes from "./ciudades.routes.js";
import empleadosRoutes from "./empleados.routes.js";

const router = Router();

router.use(paisesRoutes);
router.use(areasRoutes);
router.use(ciudadesRoutes);
router.use(empleadosRoutes);

export default router;
