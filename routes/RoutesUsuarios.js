const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/UsuariosController');


//rutas clientes
router.post('/',clienteController.nuevoCliente);
router.get('/',clienteController.verClientes);
router.get('/:id',clienteController.clienteId);
router.put('/update/:id',clienteController.actualizarCliente);
router.delete('/delete/:id',clienteController.borrarCliente);


module.exports = router;
