import { Router } from "express";
import {
  getEmpleados,
  postEmpleados,
} from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/empleados", getEmpleados);
router.post("/empleados", postEmpleados);

export default router;
