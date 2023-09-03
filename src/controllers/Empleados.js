/* ingresar control de escepciones para los datos*/

const { Op } = require('sequelize');
const { response } = require('express');
const EmpleadosSchema  = require('../models/Empleados');
//las instancias se escriben on minusculas

const obtenerEmpleado = async (req, res = response) => {
    try {

        const {id} = req.params;
        let obtieneEmpleado = await EmpleadosSchema.findOne({
            where:{
                id:id,
                //activo:1
            }
        });

        if (!obtieneEmpleado) {
            res.status(500).json({
                ok:false,
                message:"El empleado no existe o no está activo"
            });
        }
            res.status(200).json({
                ok:true,
                message:"Id Encontrado",
                empleado:obtieneEmpleado
            });
        

    } catch (error) {
        res.status(500).json({
            ok:false,
            message:error
        })

    }
}

/*
  GET ALL ACTIVE EMPLOYEES
*/
const obtenerEmpleados = async (req, res = response) => {
    console.log(req.params)
    try {
        let veTodos = await EmpleadosSchema.findAll({
            where:{
                activo:1
            }
        });

        if(!veTodos){
            res.status(500).send({
                message:"No se pudo encontrar registros"
            });
        }
            res.status(200).json({
                ok:true,
                message:"Empleados activos",
                empleados:veTodos
              });
        
    } catch (error) {
        res.status(500).send({
            message:error
        });
    }
}

/*
  INSERT
*/
const crearEmpleado = async (req, res = response) => {
    try {
        const { primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, fechaNacimiento, DPI, NIT, email,departamento,municipio,cantidadHijos,salario, activo } = req.body;
        let guardar = await EmpleadosSchema.create({ primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, fechaNacimiento, DPI, NIT, email,departamento,municipio,cantidadHijos,salario, activo });

        if (!guardar) {
            res.status(500).send({
                message:"Los datos no fueron guardados, intente de nuevo"
            })
        }
            res.status(201).json({
                ok: true,
                respuesta: "Guardado con éxito",
                primerNombre,
                segundoNombre,
                primerApellido,
                segundoApellido,
                direccion
            })
        
    } catch (error) {
        res.status(500).send({
            message:error
        })
        
    }
};

/*
  UPDATE
*/
const actualizarEmpleado = async (req, res = response) => {
    
    try{
        const {id, primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, fechaNacimiento, DPI, NIT, email,departamento,municipio,cantidadHijos,salario} = req.body;
        
        let actualizar = await EmpleadosSchema.update({primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, fechaNacimiento, DPI, NIT, email,departamento,municipio,cantidadHijos,salario, },{
            where: {
                id:id
            }
        });

        if(!actualizar){
            res.status(500).send({
                message:"El usuario no fue actualizado, intente nuevamente"
            })
        }
            res.status(200).send({
                ok:true,
                respuesta:"Actualizado con éxito"
            })
        
    }catch(error){
        res.status(500).send({
            message:error
        })
    }
};

/*
  DELETE
*/
const eliminarEmpleado = async(req, res = response) => {
    try {
        const {id} = req.body;
        const eliminar = await EmpleadosSchema.update({activo:0},{
            where:{
                id:id
            }
        });
        
        if(!eliminar){
            res.status(500).json({
                message:"El id no fue eliminado, intente de nuevo"
            })
        }
            res.status(200).json({
                ok:true,
                respuesta:"Eliminado con éxito"
            })
        

    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}

module.exports = {
    obtenerEmpleado,
    obtenerEmpleados,
    crearEmpleado,
    actualizarEmpleado,
    eliminarEmpleado
}