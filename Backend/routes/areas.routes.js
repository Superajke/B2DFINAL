import { Router } from "express";
import { getAreas, postAreas } from "../controllers/areas.controllers.js";

const router = Router();

router.get("/areas", getAreas);
router.post("/areas", postAreas);

export default router;
