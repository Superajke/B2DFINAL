import { Router } from "express";

import {
  getDepartamentos,
  postDepartamentos,
} from "../controllers/departamentos.controllers.js";

const router = Router();

router.get("/departamentos", getDepartamentos);
router.post("/departamentos", postDepartamentos);

export default router;
