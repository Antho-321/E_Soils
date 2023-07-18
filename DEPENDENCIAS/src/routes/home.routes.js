import { Router } from "express";
const router = Router();


import { rutaPricipal, postFisicas, PostRegistro_Suelos, postQuimicas, postClasification,
putClient,getIdUser } from "../controllers/home.controller.js";
router.get('/',rutaPricipal);


router.post('/postFisicas', postFisicas);
router.post('/postQuimicas', postQuimicas);
router.post('/postClasification', postClasification);
router.put('/putClient', putClient);
router.post('/login',getIdUser);
export default router;