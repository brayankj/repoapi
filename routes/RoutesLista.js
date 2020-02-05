const express = require('express');
const router = express.Router();

const ListaController = require('../controllers/ListaController');


//rutas clientes
router.post('/:id',ListaController.crearLista);
router.post('/agregar/:id/:id_producto',ListaController.addProducto);
router.post('/remover/:id/:id_producto',ListaController.removeProducto);


module.exports = router;