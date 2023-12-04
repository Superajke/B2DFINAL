import { Router } from "express";
import {
  getTiposContrataciones,
  postTipoContratacion,
} from "../controllers/tiposContrataciones.controllers.js";

const router = Router();

router.get("/tipos-contrataciones", getTiposContrataciones);
router.post("/tipos-contrataciones", postTipoContratacion);

export default router;
