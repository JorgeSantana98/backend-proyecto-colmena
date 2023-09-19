// Rutas para producto
const express = require('express');
const router = express.Router();
const termohumedadController = require('../controllers/termohumedadController');

// api/productos
router.get('/', termohumedadController.obtenerTermohumedad);
router.get('/:id', termohumedadController.obtenerUno);

module.exports = router;