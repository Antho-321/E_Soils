import { Router } from "express";
import { rutaPricipal } from "../controllers/home.controller.js";
const router = Router();

router.get('/',rutaPricipal);

export default router;