const { Router } = require('express');
//const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

const { obtenerEmpleado, obtenerEmpleados, crearEmpleado, actualizarEmpleado, eliminarEmpleado } = require('../controllers/Empleados');

router.get('/editar/:id',validarCampos, obtenerEmpleado);
//router.get('/:id',validarCampos, obtenerEmpleado);

router.get('/:all', validarCampos,  obtenerEmpleados);

router.post('/new', validarCampos, crearEmpleado);

router.post('/update', validarCampos, actualizarEmpleado);


router.delete('/delete', validarCampos, eliminarEmpleado);

module.exports = router;