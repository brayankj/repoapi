const express = require('express');
const router = express.Router();

const ProductoController = require('../controllers/ProductoController');


//rutas clientes
router.post('/',ProductoController.nuevoProducto);
router.get('/todos/:id?',ProductoController.verProductos);
router.get('/:id',ProductoController.ProductoId);
router.put('/update/:id',ProductoController.actualizarProducto);
router.delete('/delete/:id',ProductoController.borrarProducto);


module.exports = router;