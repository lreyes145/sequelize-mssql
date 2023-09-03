//const { RequestError, Sequelize, Model, DataTypes } = require("tedious");
const { Sequelize, DataTypes, Model } = require('sequelize');
//const sequelize = new Sequelize('mssql::memory:');
const sequelize = require ('../database/config');


const EmpleadosSchema = sequelize.define('Empleados',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true
    },
    primerNombre:{
        type: DataTypes.STRING
    },
    segundoNombre:{
        type: DataTypes.STRING
    },
    primerApellido:{
        type: DataTypes.STRING
    },
    segundoApellido:{
        type: DataTypes.STRING
    },
    direccion:{
        type: DataTypes.STRING
    },
    fechaNacimiento:{
        type:DataTypes.DATEONLY
    },
    DPI:{
        type: DataTypes.STRING
    },
    NIT:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    departamento:{
        type:DataTypes.STRING
    },
    municipio:{
        type:DataTypes.STRING
    },
    cantidadHijos:{
        type: DataTypes.INTEGER
    },
    salario:{
        type:DataTypes.DECIMAL
    },
    activo:{
        type:DataTypes.INTEGER
    }
 },{
    timestamps: false,
    tableName: 'Empleados'
 });

/*
(async function crearTabla(){
  await EmpleadosSchema.sync()
})();
*/

 module.exports = EmpleadosSchema;

 /*sequelize,
 modelName:'Empleado'*/