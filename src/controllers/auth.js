/*
  Para mayor orden, se aconseja tener las validaciones desde el controlador, no desde
  la ruta, para que la ruta no se pierda de vista y ocupe una sola linea
*/

const { response } = require ('express');

const crearUsuario = (req,res = response) => {

    const { nombre, email} = req.body;
    // estatus correcto al momento de crear un dato
    res.status(201).json({
        ok:true,
        respuesta:"ok de nuevo",
        nombre,
        email
    })
};

const loginUsuario = (req, res = response) => {
const { email } = req.body;
    res.status(200).json({
        ok:true,
        respuesta:"ok de nuevo",
        email
    })
};

module.exports = {
    crearUsuario,
    loginUsuario
};