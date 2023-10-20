const mysql=require('mysql'); // INVOCACION DE LIBRERIA  //

//  CONEXION A BASE DE DATOS  //
const conexion=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp_crud_db'
});

//  VERIFICACION DE CONEXION //
conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es:' +error);
        return
    }
    console.log('¡Base de datos en linea!')
})

// MODULO EXPORTADO  //
module.exports = conexion;