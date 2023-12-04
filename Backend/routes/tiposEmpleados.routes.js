import { Router } from "express";
import {
  getTiposEmpleados,
  postTipoEmpleado,
} from "../controllers/tiposEmpleados.controllers.js";

const router = Router();

router.get("/tipos-empleados", getTiposEmpleados);
router.post("/tipos-empleados", postTipoEmpleado);

export default router;
