import { Sequelize,DataTypes,QueryTypes,Op } from 'sequelize';
require('dotenv').config();

//conexion basica


    const sequelize = new Sequelize('Evaluacion', 'sa','Sg1nfo',{
        dialect:'mssql',
        host:'127.0.0.1',
        port:1436
     });
//1436 for home
   exports.DataTypes = DataTypes;
   module.exports = sequelize;

   exports.Op = Op

   //export default sequelize