/*
  Para mayor orden, se aconseja tener las validaciones desde el controlador, no desde
  la ruta, para que la ruta no se pierda de vista y ocupe una sola linea
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

//const { crearUsuario, loginUsuario } = require('../controllers/auth');

router.post(
    '/new',
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es inválido').isEmail(),
    validarCampos,
crearUsuario);

router.post(
    '/',
    check('email','Debe ingresar un email válido').not().isEmpty().isEmail(),
    check('password','Contraseña muy débil').isLength({min:5}),
    validarCampos,
 loginUsuario);


module.exports = router;