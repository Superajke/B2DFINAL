import { Router } from "express";
import { postEvento } from "../controllers/evento.controller.js";

const router = Router();

router.post("/evento", postEvento);

export default router;
