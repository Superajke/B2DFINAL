import { Router } from "express";
import { getSedes, postSedes } from "../controllers/sedes.controllers.js";

const router = Router();

router.get("/sedes", getSedes);
router.post("/sedes", postSedes);

export default router;
