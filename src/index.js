const express = require('express');
require('dotenv').config();
var cors = require('cors');
const  sequelize = require ('./database/config');
//const EmpleadosSchema = require('./models/Empleados')
const app = express();
const PORT = process.env.PORT;
//Rutas
app.use(cors());
app.use( express.json() );
//app.use('/api/auth', require('./routes/auth'));
app.use('/api/empleado', require('./routes/Empleados'));

//Base de datos
async function test(){
    try {
        await sequelize.authenticate();
        console.log("exitoso");
    } catch (error) {
        console.log(error);
    }
}

test()


//escucha
 app.listen(PORT, function(){
    console.log(`Funcionando en puerto ${PORT}`);
});
