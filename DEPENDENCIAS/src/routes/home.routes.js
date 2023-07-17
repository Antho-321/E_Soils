import { Router } from "express";
const router = Router();


import { rutaPricipal, postFisicas, PostRegistro_Suelos, postQuimicas, postClasification, postRegistro_Usuario2, postRegistro_Usuario1 } from "../controllers/home.controller.js";
router.get('/',rutaPricipal);

router.post('/postRegistro_Usuario2', postRegistro_Usuario2);
router.post('/postRegistro_Usuario1', postRegistro_Usuario1);
router.post('/PostRegistro_Suelos', PostRegistro_Suelos);
router.post('/postFisicas', postFisicas);
router.post('/postQuimicas', postQuimicas);
router.post('/postClasification', postClasification);

export default router;