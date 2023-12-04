import { Router } from "express";
import { getPaises, postPaises } from "../controllers/paises.controllers.js";

const router = Router();

router.get("/paises", getPaises);
router.post("/paises", postPaises);

export default router;
