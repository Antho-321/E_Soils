import { Router } from "express";
const router = Router();


import { rutaPricipal, postFisicas, PostRegistro_Suelos, postQuimicas, postRegistro_Usuario } from "../controllers/home.controller.js";
router.get('/',rutaPricipal);


router.post('/postFisicas', postFisicas);
router.post('/postQuimicas', postQuimicas);
router.post('/PostRegistro_Suelos', PostRegistro_Suelos);
router.post('/postRegistro_Usuario', postRegistro_Usuario);

export default router;