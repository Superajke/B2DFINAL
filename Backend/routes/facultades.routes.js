import { Router } from "express";
import {
  getFacultades,
  getFacultad,
  postFacultades,
} from "../controllers/facultades.controllers.js";

const router = Router();

router.get("/facultades", getFacultades);
router.get("/facultades/:id", getFacultad);
router.post("/facultades", postFacultades);

export default router;
