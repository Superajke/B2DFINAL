import { Router } from "express";
import {
  getCiudades,
  postCiudades,
} from "../controllers/ciudades.controllers.js";

const router = Router();

router.get("/ciudades", getCiudades);
router.post("/ciudades", postCiudades);

export default router;
