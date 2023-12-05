import { Router } from "express";
import {getEventos, postEvento, updateEvento, deleteEvento } from "../controllers/evento.controller.js";

const router = Router();

router.get("/evento", getEventos);
router.post("/evento", postEvento);
router.put("/evento/:id", updateEvento);
router.delete("/evento/:id", deleteEvento);

export default router;
