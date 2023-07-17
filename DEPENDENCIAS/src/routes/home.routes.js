import { Router } from "express";
const router = Router();


import { rutaPricipal, postFisicas, PostRegistro_Suelos, postQuimicas } from "../controllers/home.controller.js";
router.get('/',rutaPricipal);


router.post('/postFisicas', postFisicas);
router.post('/postQuimicas', postQuimicas);

export default router;