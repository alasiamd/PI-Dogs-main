const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
    getDogs, getDogById, getDogByName, postDogs, getTemperaments
} = require("../controllers/index");

const router = Router();
router.get("/dogs", getDogs);
router.get("/dogs/:idRaza", getDogById);
// router.get("/dogs", getDogByName);
router.post("/dogs/", postDogs);
router.get("/temperaments", getTemperaments);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
