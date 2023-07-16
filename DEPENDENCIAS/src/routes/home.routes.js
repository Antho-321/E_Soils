import { Router } from "express";
const router = Router();


import { rutaPricipal, postFisicas, PostRegistro_Suelos } from "../controllers/home.controller.js";
router.get('/',rutaPricipal);


router.post('/postFisicas', postFisicas);

export default router;