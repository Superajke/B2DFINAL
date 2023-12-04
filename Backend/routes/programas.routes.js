import { Router } from "express";
import {
  getProgramas,
  postProgramas,
} from "../controllers/programas.controllers.js";

const router = Router();

router.get("/programas", getProgramas);
router.post("/programas", postProgramas);

export default router;
