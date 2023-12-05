import { Router } from "express";
import {getEventos, postEvento } from "../controllers/evento.controller.js";

const router = Router();

router.get("/evento", getEventos);
router.post("/evento", postEvento);

export default router;
